define([
    'base/js/namespace',
], function(
    Jupyter
) {
    function createClass(name,rules){
        var style = document.createElement('style');
        style.type = 'text/css';
        document.getElementsByTagName('head')[0].appendChild(style);
        if (!(style.sheet || {}).insertRule)
            (style.styleSheet || style.sheet).addRule(name, rules);
        else
            style.sheet.insertRule(name+"{"+rules+"}",0);
    }
    function load_ipython_extension() {
        createClass('.full_width', 'width: 100% !important;');
        var full = false;
        var handler = function () {
            if (!full) {
                $(".container").addClass("full_width");
            } else {
                $(".container").removeClass("full_width");
            }
            full = !full;
            $("#toggle-full-width").toggleClass("active", full);
        };

        var action = {
            icon: 'fa-arrows-h', // a font-awesome class used on buttons, etc
            help    : 'Enable/Disable Full Width',
            help_index : 'zz',
            handler : handler,
            id: 'toggle-full-width'
        };
        var prefix = 'full_width';
        var action_name = 'toggle';

        var full_action_name = Jupyter.notebook.keyboard_manager.actions.register(action, name, prefix);
        Jupyter.toolbar.add_buttons_group([full_action_name]);
    }
    return {
        load_ipython_extension: load_ipython_extension
    };
});
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

    function getCookie(name) {
        var name = name + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function setCookie(name, value) {
        var d = new Date();
        d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=" + document.location.pathname;
    }

    function load_ipython_extension() {
        createClass('.full_width', 'width: 100% !important;');
        var full = getCookie('full_width_enabled') === 'true';
        if (full) {
            $(".container").addClass("full_width");
        }
        var handler = function () {
            if (!full) {
                $(".container").addClass("full_width");
            } else {
                $(".container").removeClass("full_width");
            }
            full = !full;
            $("#toggle-full-width").toggleClass("active", full);
            setCookie('full_width_enabled', full);
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

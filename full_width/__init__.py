"""Extension loader"""

def _jupyter_nbextension_paths():
    return [dict(
        section="notebook",
        src="jupyter",
        dest="full_width",
        require="full_width/full_width"
    )]

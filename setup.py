"""Full width setup.py"""
import os
from setuptools import setup, find_packages

setup(
    name="jupyter_full_width",
    version="1.1.0",
    description="Add a button to allow jupyter to use the full browser width",
    url="https://github.com/JoaoFelipe/JupyterFullWidth",
    author="Joao Felipe Pimentel",
    author_email="joaofelipenp@gmail.com",
    packages=find_packages(),
    package_data={"full_width": [
    	os.path.join("jupyter", "full_width.js"),
    	os.path.join("jupyter", "icon.png"),
        os.path.join("jupyter", "readme.md"),
    	os.path.join("jupyter", "full_width.yaml"),
    ]}
)

import {getLanguage} from 'utils';

const strings = {
    "fr": {
        "MENU_HOME": "Accueil",
        "MENU_GALLERIES": "Galeries",
        "MENU_PUBLICATIONS": "Publications",
        "MENU_CONTACT": "Contact",
        "MENU_ABOUT": "À propos",

        "GO_TO_GALLERY": "Accéder à la galerie"
    },
    "en": {
        "MENU_HOME": "Home",
        "MENU_GALLERIES": "Galleries",
        "MENU_PUBLICATIONS": "Publications",
        "MENU_CONTACT": "Contact",
        "MENU_ABOUT": "About",

        "GO_TO_GALLERY": "Open gallery"
    }
};

export default strings[getLanguage()];
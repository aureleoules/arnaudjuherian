import React, { render } from 'preact';
import * as serviceWorker from './serviceWorker';

import App from './App';
import './styles/index.scss';

import {getLanguage, setLanguage} from 'utils';

/* Remove console.logs on production */
if(process.env.NODE_ENV !== "development") {
    console.log = () => {};
}

console.info("Website Designer", "https://www.aureleoules.com");

function KeyPress(e) {
    if (e.keyCode === 223 && e.shiftKey) {
        const lang = getLanguage();
        if(lang === "en") setLanguage("fr");
        if(lang === "fr") setLanguage("en");

        document.location.reload();
    }
}

document.onkeydown = KeyPress;

render(<App />, document.body);

serviceWorker.unregister();

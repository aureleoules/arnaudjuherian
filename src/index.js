import React, { render } from 'preact';
import * as serviceWorker from './serviceWorker';

import App from './App';
import './styles/index.scss';
import 'hamburgers/dist/hamburgers.min.css';

/* Remove console.logs on production */
if(process.env.NODE_ENV !== "development") {
    console.log = () => {};
}

render(<App />, document.body);

serviceWorker.unregister();

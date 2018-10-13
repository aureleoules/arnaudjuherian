import React, { render } from 'preact';
import * as serviceWorker from './serviceWorker';

import App from './App';
import './styles/index.scss';

render(<App />, document.body);

serviceWorker.unregister();

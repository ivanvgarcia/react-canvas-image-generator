import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './i18n';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<App />, rootElement);
} else {
  ReactDOM.render(<App />, rootElement);
}

serviceWorker.register();

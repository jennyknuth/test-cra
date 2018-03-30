import React from 'react';
import ReactDOM from 'react-dom';

import App from './App/App';
import registerServiceWorker from './registerServiceWorker';

import './index.scss';

ReactDOM.render(
  React.createElement(App),
  document.getElementById('root'),
);

registerServiceWorker();

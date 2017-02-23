// Adding styles
require('../css/main.css');

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';


ReactDOM.render(
  <App />,
  document.getElementById('root')
)

console.log('Pistonchik!!')
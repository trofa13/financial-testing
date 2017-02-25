// Adding styles
require('bootstrap-css-only');
require('../css/main.css');

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import configureStore from './store/configureStore';

const store = configureStore();

import App from './containers/App';
import Departments from './components/Departments';
import Employees from './components/Employees';
import { routes } from './routes'


ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
)
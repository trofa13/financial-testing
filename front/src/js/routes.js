import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import App from './containers/App';
import Departments from './containers/Departments';
import Employees from './containers/Employees';
import NotFound from './components/NotFound';

export const routes = (
  <div>
    <Route path='/' component={App}>
      <IndexRedirect to='departments' /> {/* INDEX REDIRECT */}
      <Route path='/departments' component={Departments} />
      <Route path='/employees' component={Employees} /> 
    </Route>
    <Route path='*' component={NotFound} />
  </div>
);
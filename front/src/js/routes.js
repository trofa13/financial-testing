import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import App from './containers/App';
import Departments from './components/Departments';
import Employees from './components/Employees';
import NotFound from './components/NotFound';

export const routes = (
  <div>
    <Route path='/' component={App}>
      <IndexRedirect to='departments' /> {/* INDEX REDIRECT */}
      <Route path='/departments' component={Departments}>
        <Route path='/departments/:id/employees' component={Employees} />  
      </Route>
    </Route>
    <Route path='*' component={NotFound} />
  </div>
)
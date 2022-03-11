import React from 'react';
import { Route, IndexRoute } from 'react-router';

/**
 * Import all page components here
 */
import App from './App';
import Europe from './pages/Europe';
import Index from './Index'

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route exact path="/" component={App}>
    <IndexRoute component={Index} />
    <Route path="/europe" component={Europe} />
  </Route>
);
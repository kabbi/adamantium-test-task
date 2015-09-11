import React from 'react';
import { Route, DefaultRoute } from 'react-router';

import App from './routes/App';
import Trends from './routes/Trends';
import Login from './routes/Login';

export default (
  <Route path="/" handler={App}>
    <DefaultRoute name="login" handler={Login}/>
    <Route name="trends" path="auth/:token" handler={Trends}/>
  </Route>
);

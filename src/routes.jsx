import React from 'react';
import { Route, DefaultRoute } from 'react-router';

import App from './routes/App';
import TrendsPage from './routes/TrendsPage';
import AuthorizePage from './routes/AuthorizePage';
import AboutPage from './routes/AboutPage';

export default (
  <Route path="/" handler={App}>
    {/* User-related page routing */}
    <DefaultRoute name="about" handler={AboutPage}/>
    <Route name="trends" path="trends" handler={TrendsPage}/>
    {/* Intercept instagram auth token callback */}
    <Route name="authorize" path="access_token=:token" handler={AuthorizePage}/>
  </Route>
);

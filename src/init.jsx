import React from 'react';
import Router from 'react-router';

import routes from './routes';

Router.run(routes, Router.HashLocation, function(Handler) {
  return React.render(<Handler />, document.body);
});

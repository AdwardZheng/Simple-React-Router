import React from 'react';

const RouterContext = React.createContext({
  history: null,
  location: null,
  match: null,
});

export default RouterContext;
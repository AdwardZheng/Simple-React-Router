import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import RouterContext from './routerContext';

class Router extends Component {
  constructor(props) {
    super(props);
    this.history = createBrowserHistory();
    this.state = {
      location: this.history.location
    };

    this.listen = this.history.listen(location => {
      this.setState({
        location
      });
    });
  }

  computeRootMatch(pathName) {
    return { path: '/', url: '/', params: {}, isExact: pathName === '/' };
  }

  render() {

    return (
      <RouterContext.Provider
        children={this.props.children}
        value={{
          history: this.history,
          location: this.state.location,
          match: this.computeRootMatch(this.state.location.pathname),
        }}
      />
    )
  }
}

export default Router;

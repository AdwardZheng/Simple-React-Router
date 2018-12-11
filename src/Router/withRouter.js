import React, { Component } from 'react';
import RouterContext from './routerContext';

const WithRouter = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <RouterContext.Consumer>
          {
            context => {
              const { history, location } = context;
              return <WrappedComponent {...this.props} history={history} location={location}/>
            }
          }
        </RouterContext.Consumer>
      );
    }
  }
}

export default WithRouter;
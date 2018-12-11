import React, { Component } from 'react';
import RouterContext from './routerContext';
import matchPath from './matchPath';

class Switch extends Component {

  render() {
    return (
      <RouterContext.Consumer>
        {
          context => {
            let match, element;

            React.Children.forEach(this.props.children, (child, index) => {
              if (match == null && React.isValidElement(child)) {
                element = child;
                const path = child.props.path;
                match = path ? matchPath(context.location.pathname, {...child.props}) : context.match;
              }
            });
            return React.cloneElement(element, { match, computedMatch: match });
          }
        }
      </RouterContext.Consumer>
    )
  }
}

export default Switch;

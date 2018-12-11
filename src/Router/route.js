import React, { Component } from 'react';
import RouterContext from './routerContext';
import matchPath from './matchPath';

function isEmptyChildren(children) {
  return React.Children.count(children) === 0;
}

class Route extends Component {

  render() {
    return (
      <RouterContext.Consumer>
        {
          context => {
            const location = this.props.location || context.location;
            const match = this.props.computedMatch
              ? this.props.computedMatch
              : this.props.path
                ? matchPath(location.pathname, this.props)
                : context.match;
            
            const props = { ...context, location, match };
            let { children , component, render } = this.props;
            return (
              <RouterContext.Provider>
                {
                  children && !isEmptyChildren(children)
                    ? children
                    : props.match
                      ? component
                        ? React.createElement(component, props)
                        : render
                          ? render(props)
                          : null
                      :null
                }
              </RouterContext.Provider>
            );
          }
        }
      </RouterContext.Consumer>
    );
  }
}

export default Route;

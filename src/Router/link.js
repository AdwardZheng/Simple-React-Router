import React, { Component } from 'react';
import RouterContext from './routerContext';

class Link extends Component {

  handleClick = (e, history) => {
    if (this.props.onClick) this.props.onClick(e);
    e.preventDefault();
    history.push(this.props.to);
  }

  render() {
    return (
      <RouterContext.Consumer>
        {
          context => {
            const { history } = context;
            return (<a
              children={this.props.children}
              onClick={(event) => this.handleClick(event, history)}
              href="/a"
            />);
          }
        }
      </RouterContext.Consumer>
    )
  }
}

export default Link;

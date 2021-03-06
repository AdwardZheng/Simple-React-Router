import React, { Component } from 'react';
import Router from '../Router/router';
import Switch from '../Router/switch';
import Route from '../Router/route';
import Link from '../Router/link';
import WithRouter from '../Router/withRouter';

const Page1 = () => <span>page1</span>;
const Page3 = () => <span>page3</span>;
const RouterLink = WithRouter((props) => {
  const { history } = props;

  function handleClick() {
    history.push('/2')
  };

  return <span onClick={handleClick}>RouterLink</span>
});

class Example extends Component {

  render() {
    return (
      <div>
        <Router>
          <p>Router:</p>
          <Switch>
            <Route path='/1' component={Page1}/>
            <Route path='/2' render={() => <span>page2</span>}/>
            <Route path='/3' component={Page3}/>
          </Switch>
          <br/>
          <Link to='/1'><span>LinkPage1</span></Link>
          <br/>
          <Link to='/2'><span>LinkPage2</span></Link>
          <br/>
          <Link to='/3'><span>LinkPage3</span></Link>
          <br/>
          <RouterLink/>
        </Router>
      </div>
    );
  }
}

export default Example;

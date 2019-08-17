import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Test from './test';
import './index.css';
import './index.scss';
import busyzzLib, { math } from 'busyzz-lib';
const { add } = math;
const res = add(12, 4);
console.log(res);
class App extends Component {
  render() {
    return (
      <Router>
        <Link to="/test">test</Link>
        <Switch>
          <Route path="/test" component={Test} />
        </Switch>
      </Router>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));

import 'babel-polyfill';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './index.css';
import './index.scss';
import Header from 'components/header';
const Test = () => {
  return <div>okkk</div>;
};
class App extends Component {
  render() {
    return (
      <Router>
        <Link to="/test">test</Link>
        <Switch>
          <Route path="/test" component={Header} />
        </Switch>
      </Router>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));

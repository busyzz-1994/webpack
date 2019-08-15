import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { fn } from './test';
let a = [1, 2, 3];
let b = a.map(item => item * 2);
let obj = {
  name: '1',
};
let res = fn();
console.log({
  ...obj,
  age: 32,
});
class Test extends Component {
  render() {
    return <div>hello world!</div>;
  }
}
ReactDOM.render(<Test />, document.getElementById('root'));

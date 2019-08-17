import React, { Component, lazy, Suspense } from 'react';
const Echarts = lazy(() => import('echarts-for-react'));
// const Lazy = lazy(() => import('./lazy'));
class Test extends Component {
  render() {
    return (
      <Suspense fallback={<div>loading...</div>}>
        <h1>懒加载组件</h1>
        <Echarts />
      </Suspense>
    );
  }
}
export default Test;

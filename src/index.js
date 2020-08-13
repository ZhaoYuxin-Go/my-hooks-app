import React from 'react';
import ReactDOM from 'react-dom';
import fastclick from 'fastclick';
import App from './App';
import './assets/css/AppCommonInit.css';

// 解决点击事件延迟300毫秒的问题
fastclick.attach(document.body);

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

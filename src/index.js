import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker'
import 'bootstrap';
import Counter from './components/counter';

// const element=<h1>Hello World</h1>;
// console.log(element)
// ReactDOM.render(element,document.getElementById('root'))
ReactDOM.render(<Counter />, document.getElementById('root'));
// registerServiceWorker()

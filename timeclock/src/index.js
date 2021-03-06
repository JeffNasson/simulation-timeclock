import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {HashRouter} from 'react-router-dom'; //renders hashed file paths from our routes.js. For example the path /#/ in routes is {Home}. HashRouter will parse this for us when wrapping <App />

ReactDOM.render(
<HashRouter>
    <App />
</HashRouter>    
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

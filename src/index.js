import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/common.css';
import App from './Components/App/App';
//import * as serviceWorker from './serviceWorker';


if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/serviceWorker.js');
}

ReactDOM.render(<App />, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA


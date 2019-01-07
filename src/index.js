import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/common.css';
import App from './Components/App/App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import  rootReducer from './Reducers'
import { createStore } from '../../../../AppData/Local/Microsoft/TypeScript/3.1/node_modules/redux';

//import * as serviceWorker from './serviceWorker';


if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./service-worker.js');
}

ReactDOM.render(
    <Provider store={createStore(rootReducer)}>
    <BrowserRouter><App /></BrowserRouter>
    </Provider>, 
document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA


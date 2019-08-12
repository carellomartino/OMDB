import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
//import Home from './components/Home'
import { Provider } from 'react-redux'
import store from './store'
import Main from './components/Main'

//import './index.css';
//import App from './App/App';

ReactDOM.render((
    <Provider store = {store}>
    <BrowserRouter>
        <Route path='/' component={Main} />
    </BrowserRouter>
    </Provider>
), document.getElementById('root'));

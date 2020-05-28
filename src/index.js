import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import { App } from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

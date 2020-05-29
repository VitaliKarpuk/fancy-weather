import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import { App } from './app';
// eslint-disable-next-line import/extensions
import '@fortawesome/fontawesome-free/js/all.js';
import store from './store';
// eslint-disable-next-line import/order
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);

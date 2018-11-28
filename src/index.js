import React from 'react';
import { Router } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import {render} from 'react-dom';
import App from './components/App';
import {createStore} from "redux";
import cv from "./reducers";
import {Provider} from "react-redux";

const history = createBrowserHistory();
const store = createStore(cv,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
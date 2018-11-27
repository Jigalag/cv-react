import React from 'react';
import { Router } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import {render} from 'react-dom';
import App from './components/App';

const history = createBrowserHistory();

render(
    <Router history={history}>
        <App />
    </Router>,
    document.getElementById('root')
);
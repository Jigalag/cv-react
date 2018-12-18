import React from 'react';
import { Router } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import App from './App';
import createBrowserHistory from "history/createBrowserHistory";

const history = createBrowserHistory();

const AppContainer = () =>
    <Router history={history}>
        <ScrollToTop>
            <App />
        </ScrollToTop>
    </Router>;

export default AppContainer;

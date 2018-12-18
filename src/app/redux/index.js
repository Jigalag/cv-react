import {createStore, applyMiddleware, compose} from "redux";
import cv from "./reducers";
import thunk from 'redux-thunk';

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk)
);

const store = createStore(cv, enhancer);

export default store;
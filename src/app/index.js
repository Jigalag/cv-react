import React from 'react';
import {Provider} from "react-redux";
import {render} from 'react-dom';
import store from './redux';

import AppContainer from './containers/AppContainer';

render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('root')
);
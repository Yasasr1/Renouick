import React from 'react';
import ReactDOM from 'react-dom';
//to connect store with react
import { Provider } from 'react-redux';
//to create the store
import { createStore, applyMiddleware, compose } from 'redux';
//middleware to handle asynchronus code
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import reducer from './store/reducers/reducer';

//for redux devtools advanced
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//creating the redux store
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
));

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>
                , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// @ts-nocheck
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {Provider} from "react-redux"
import {createStore} from "redux"
import {auth} from './reducers/auth'
import LoginForm from "./LoginForm";

const store = createStore(auth, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
            <Route path='/' exact component={LoginForm}/>
            <Route path='/' component={App} />
            </Switch>
        </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

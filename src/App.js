import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import Login from "./Container/Login";
import Home from "./Container/Home";
import rootReducer from "./reducer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import {combineForms,createForms} from 'react-redux-form';

const history = createBrowserHistory();

const reducer = combineReducers({
  root: rootReducer,
  ...createForms({userform:''})
});
const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Route exact path="/" component={Login} />
            <Route exact path="/Home" component={Home} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

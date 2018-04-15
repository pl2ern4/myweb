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
import {createForms} from 'react-redux-form';

const history = createBrowserHistory();

const reducer = combineReducers({
  root: rootReducer,
  ...createForms({userform:'',user_register:''})
});
const store = createStore(reducer);
let store1 = store.getState();
class App extends Component {
  render() {
    
    debugger;
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import Login from "./Container/Login";
import Home from "./Container/Home";
import rootReducer from "./reducer";
import { Router, Route,Redirect,withRouter } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import {createForms} from 'react-redux-form';
import {getCookie} from './utility';
import * as action from './action';
import { connect } from 'react-redux';


const history = createBrowserHistory();

const reducer = combineReducers({
  root: rootReducer,
  ...createForms({userform:'',user_register:''})
});

const store = createStore(reducer);

class App extends Component {

  componentWillMount(){
    //dispatch(action.requestLogin(data));
  }
  render() {
    let isLoggedIn = getCookie('userLogin');
    
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
              <Route exact path="/" render={(props) =>(
                !!isLoggedIn ? ( <Route  component={Home} />)
                : ( <Redirect to={{ pathname: '/login', state: { from: props.location } }} />)
              )} />
              <Route exact path="/login" component={Login} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

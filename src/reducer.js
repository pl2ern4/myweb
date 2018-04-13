import {combineReducers } from 'redux';
import constants from './contant';
import * as action from './action';
import {login} from './api';

const initialstate = {data:""}
const loginReducer = (state = initialstate, action)=> {
    console.log("reducer",state,action);
    let data = login();
    return {
        ...state,
        action
    }
}


const rootReducer = combineReducers ({
    login:loginReducer
});
export default rootReducer;

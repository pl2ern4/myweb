import {combineReducers } from 'redux';
import * as action from './action';

const initialstate = {data:''}
const loginReducer = (state = initialstate, action)=> {
    console.log("reducer",state,action);
    return {
        ...state,
        action
    }
}


export const rootReducer = combineReducers ({
    login:loginReducer
});

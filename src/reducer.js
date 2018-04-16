import {combineReducers } from 'redux';
import constants from './contant';
import * as api from './api';
import { resolve } from 'url';
import {getCookie,deleteCookie} from './utility';

const initialstate = {data:""}

const loginReducer = (state = initialstate, action)=> {
    switch(action.type){
        case constants.LOGIN_REQUEST:
            let data = api.login(action.payload);
            return {
                ...state,
                data
            }
        
        default:
            return{
                state
            }    
    }     
}

const isLoggedInReducer = (state = initialstate,action)=>{

    switch(action.type){
        case constants.LOGIN_STATUS:
            let loginStatus = getCookie('userLogin');
            loginStatus = !!loginStatus
            return {
                ...state,
                loginStatus
            }           
        default:
            return{
                state
            }        
    }
}
const logOut = (state = initialstate,action)=>{

    switch(action.type){
        case constants.LOGOUT:
            let loginStatus = deleteCookie('userLogin');
            return {
                ...state,
                loginStatus
            }           
        default:
            return{
                state
            }        
    }
}

const registerUserReducer = (state = initialstate, action)=> {

    switch(action.type){
        case constants.REG_USER_REQUEST:
            api.registerUser(action.payload); 
            return {
                ...state,
                data:true
                
            }
        case constants.REG_USER_SUCCESS:
            return {
                ...state,
                
            }    
        default:
            return{
                state
            }    
    }      
}

const rootReducer = combineReducers ({
    login:loginReducer,
    register:registerUserReducer,
    isLoggedIn:isLoggedInReducer
});
export default rootReducer;

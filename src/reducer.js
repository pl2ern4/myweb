import {combineReducers } from 'redux';
import constants from './contant';
import * as api from './api';
import { resolve } from 'url';

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
const getCookie=()=>{
    return new Promise((resolve,reject)=>{
        resolve('resp');
    });
}
const isLoggedInReducer = (state = initialstate,action)=>{
    switch(action.type){
        case constants.LOGIN_STATUS:
            let loginStatus = getCookie().then((resp)=>{return resp})
            console.log(">>>>>>>>>>>>>>",loginStatus);
            debugger;
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
const registerUserReducer = (state = initialstate, action)=> {
    console.log("reducer",action,state);
    
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

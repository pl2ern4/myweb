import constants from './contant';

export const requestLogin = payload =>{
    console.log("action",payload,constants.LOGIN_REQUEST);
    return {
        type:constants.LOGIN_REQUEST,
        payload
    }
}
export const loginStatus = payload =>{
    console.log("action",payload,constants.LOGIN_STATUS);
    return {
        type:constants.LOGIN_STATUS
    }
}
export const registerUser = payload =>{
    console.log("action",payload,constants.REG_USER_REQUEST);
    return {
        type:constants.REG_USER_REQUEST,
        payload
    }
}

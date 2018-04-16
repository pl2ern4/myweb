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

export const logOut = payload =>{
    console.log("action",payload,constants.LOGOUT);
    return {
        type:constants.LOGOUT
    }
}

export const registerUser = payload =>{
    return {
        type:constants.REG_USER_REQUEST,
        payload
    }
}

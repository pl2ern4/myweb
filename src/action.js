import constants from './contant';

export const getLogin = payload =>{
    console.log("action",payload,constants.LOGIN);
    return {
        type:constants.LOGIN,
        payload
    }
}

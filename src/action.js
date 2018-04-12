import constants from './contant';

export const getLogin = payload =>{
    console.log(">>>",constants.LOGIN);
    return {
        type:constants.LOGIN,
        payload
    }
}

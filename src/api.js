import {setCookie} from './utility';

export const login = payload =>{
    let getdata= apiGenerator(payload);
    getdata.then((resp)=>{
        setCookie('userLogin',payload.userid,1)
        return resp;
    })
}

const apiGenerator = payload =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            let data = JSON.stringify(payload)
            resolve({isloggesin:true})  ;
        },100)
    });
}

export const registerUser = payload =>{
    let data = JSON.stringify(payload)
    localStorage.setItem('user',data);
}
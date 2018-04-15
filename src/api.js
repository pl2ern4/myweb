var FileSaver = require('file-saver');
const save = require('save-file')

export const login = payload =>{
    debugger;
    let getdata= apiGenerator(payload);
    getdata().then((resp)=>{ console.log(resp,">>>");
        debugger;
        setCookie('userLogin',payload.userid,1)
        return resp;
    })
}

const apiGenerator = payload =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            debugger;
            let data = JSON.stringify(payload)
            
            resolve({isloggesin:true})  ;
        },100)
    });
}
const setCookie= (cname, cvalue, exdays) =>{
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
export const getCookie=(cname) =>{
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
export const registerUser = payload =>{
    console.log("payload",payload)
    let data = JSON.stringify(payload)
    localStorage.setItem('user',data);
}
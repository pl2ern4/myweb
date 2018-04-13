
export const login = payload =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({isloggesin:true})            
        },100)
    }).then((resp)=>{
        console.log('resp',resp);
        return resp;
    })
}


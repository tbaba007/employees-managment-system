import {HttpResponse} from './HttpResponse';
const baseURL=process.env.REACT_APP_API;

const AppHeaders:HeadersInit={
    'Content-type':'application/json'
}

export const Get=()=>{
    console.log(baseURL)
    return fetch(`${baseURL}`).then(HttpResponse)
}
export const Post=(path:string,payLoad:any)=>{
    return fetch(`${baseURL}/${path}`,{
        method:"POST",
        headers:AppHeaders,
        body:JSON.stringify(payLoad)
    }).then(HttpResponse)
}
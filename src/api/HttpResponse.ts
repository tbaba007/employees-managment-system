interface IResponse{
    json:any,
    statusText:any,
    ok:boolean
}

export const HttpResponse=(response:IResponse)=>{
    if(!response.ok)
    {
        return Promise.reject(response.statusText)
    }
    return response.json()
}
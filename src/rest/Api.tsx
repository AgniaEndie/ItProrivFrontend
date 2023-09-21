import axios from "axios";
const instance = axios.create({
    //baseURL: "http://foxworld.online:25596",
    baseURL: "http://localhost:25585",
    timeout: 1000,
    headers:{
        "Access-Control-Allow-Origin": "*"
    }
});
// Make a request for a user with a given ID
export function Test(token:string,handleTest: any){
    instance.get('/main/test',{
        headers: { "Authorization": `Bearer ${token}` }
    } ).then(res=>{
        handleTest(res.data)
    }).catch(e =>{
        console.log(e)
    })
}

export function SendLoginToServer(data:any,handler:any) {
    instance.post("/auth/login",data).then((res)=>{
        handler(res.data)
    })
}

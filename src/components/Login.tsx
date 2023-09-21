import {useState} from "react";
import {Test,SendLoginToServer} from "../rest/Api";



function Login(){
    interface userData {
        login: string,
        token: string,
        message : string
    }
    const [user,setUser] = useState<userData>({login: "", message: "", token:""})
    const handleUser = (data:any) =>{
        setUser(data)
    }
    const [test, setTest] = useState("")
    const handleTest = (data:any)=>{
        setTest(data)
    }

    const res = ()=>{
        console.log(user.token)
        Test(user.token, handleTest)
    }


    const [login,setLogin] = useState("")
    const [password,setPassword] = useState("")
    const handleSetLogin = (data:any) =>{
        setLogin(data.target.value)
    }
    const handleSetPassword = (data:any) =>{
        setPassword(data.target.value)
    }
    function sendDataToServer() {
        let data = {"login": login, "password": password}
        console.log(SendLoginToServer(data,handleUser))
        console.log(user)
    }

    return(
        <>
            <div>
                {test}
                <button onClick={()=>{
                    res()
                }}></button>

                <input type="text" placeholder={"Login"} onChange={handleSetLogin} value={login}/>
                <input type="text" placeholder={"Password"} onChange={handleSetPassword} value={password}/>
                <button onClick={()=>{sendDataToServer()}}></button>
            </div>
        </>
    )
}
export default Login;

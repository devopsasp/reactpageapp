import { useState } from "react"
import { Input } from "@mui/material"
import Button from "@mui/material/Button"
import { ProfileContext } from "../context/profilecontext"
import { useContext } from "react"
function LoginComp()
{
 /* const [username,setUserName]=useState()
  const [password,setPassword]=useState()*/
  const [message,setMessage]=useState()
  const {username,setUserName,password,setPassword,showPage,setShowPage}=useContext(ProfileContext) 
  return(<div>Enter User Name <Input type='text' inputProps={{"data-testid":"username"}} value={username} onChange={(e)=>{

    setUserName(e.target.value)
  }}/><br/>
   Enter Password <Input type='password' value={password} inputProps={{ "data-testid": "password" }} onChange={(e)=>{setPassword(e.target.value)}} /><br/>
   <Button data-testid="loginbtn" onClick={()=>{
    if(username=="admin" && password=="pass123")
    {
        setMessage("valid username and password")
    }
    else
    {
        setMessage("invalid username and password")
    }
   }}>Login</Button>
    <div data-testid="message">{message}</div>
  </div>)
}
export default LoginComp
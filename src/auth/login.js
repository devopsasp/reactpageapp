import { Button, Input, Paper } from "@mui/material"
import { useState } from "react"
import { useContext } from "react"
import { ProfileContext } from "../context/profilecontext"


function Login()
{
    

   /* const [username,setUserName]=useState()
    const [password,setPassword]=useState()
*/
const {username,setUserName,password,setPassword,showPage,setShowPage}=useContext(ProfileContext) 
    
    const [uservalidation,setUserValidation]=useState()
    const [passwordvalidation,setPasswordValidation]=useState()    
    const [navigationmesasge,setNavigationMessage]=useState()
   

return (<div style={{width:"600px",height:"250px"}}>
         <Paper elevation={3}>
         Enter User Name <br/>
         <Input type='text' id='user' inputProps={{"data-testid":"username"}} value={username} onChange={(e)=>{

            setUserName(e.target.value)
         }}/><br/>
         <p style={{color:"red"}}> {uservalidation}</p> 
        Enter Password <br/>
        <Input type='password' value={password} inputProps={{ "data-testid": "password" }} onChange={(e)=>{
            setPassword(e.target.value)
        }} /><br/>
        <p style={{color:"red"}}>{passwordvalidation}</p>
        <Button variant="outlined" data-testid="login"
          onClick={()=>{
            console.log("button clicked")
            console.log(username)
            console.log(password)
              if(username==undefined)
              {
                setUserValidation("user name is blank")
              }
              else if(username.length<3)
              {
                setUserValidation("user name less then 3")
              }else 
              {
                setUserValidation(" ")
              }
              if(password==undefined)
              {
                setPasswordValidation("password is blank")
              }
              else if(username.length<3)
              {
                setPasswordValidation("password less then 3")
              }else 
              {
                setPasswordValidation(" ")
              }

              if(username==="admin" && password==="pass123")
              {
                console.log(username)
                console.log(password)
  setNavigationMessage("valid username and password")
  setShowPage(true)
  console.log(navigationmesasge)
  /*var userinfo=sessionStorage.getItem("userinfo")
  if(userinfo==undefined || userinfo==null)
  {
    sessionStorage.setItem("userinfo",username)
  }*/
 
              } 
              else{
               // setNavigationMessage("invalid user name and password")
              }



          }}        
                 
        >Login</Button>
    <div data-testid="message">
        {navigationmesasge}
        </div>
        </Paper>
    </div>)
}
export default Login
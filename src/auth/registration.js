import { Input,Button } from "@mui/material";
import { useContext } from "react";

function Register()
{

    return (<div> 
        Enter User Name <br/>
        <form>
         <Input type='text'  required/><br/>
         Enter Password <br/>
         <Input type='password' required/><br/>
         Enter email Id<br/>
         <Input type='email' required pattern="[a-z0-9._%+-]+@[[a-z0-9.-]+\.[a-z]{2,4}$"/><br/>
         <Button>Register</Button>
         </form>

    </div>)
}

export default Register
import { ItemArray } from "./data"
import { Avatar, Button, Icon, IconButton, Table, Toolbar } from "@mui/material"
import TableContainer from "@mui/material/TableContainer"
import TableCell from "@mui/material/TableCell"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Input from "@mui/material/Input"
import { Search } from "@mui/icons-material"
import { useContext, useState } from "react"
import { ProfileContext } from "../context/profilecontext"
import { Link, Outlet, Route,Routes, useNavigate } from "react-router-dom"
import AppBar from "@mui/material/AppBar"
import axios from 'axios'
import { useEffect } from "react"
import AddForm from "./addform"
function ViewData()
{
     const [search,setSearch]=useState()
      const {username,setShowPage}=useContext(ProfileContext)  
     const [itemarray,setItemArray]=useState([])

     var navigate=useNavigate()
useEffect(()=>{

  axios.get("http://localhost:9087/getallitems").then((e)=>{
    setItemArray(e.data)
  }).catch((e)=>{
    console.log("error "+e)
  })

},[])


var userinfo=sessionStorage.getItem("userinfo")


      return (
        
 
 <>
           
         <div>
         <AppBar>
   <Toolbar>

   <Avatar variant="square" sx={{width:"90px",backgroundColor:"green",margin:"10px"}}>
{userinfo}
</Avatar>

       
       <div style={{width:"900px",display:"flex"}}>


<Input type='text' onChange={(e)=>{
setSearch(e.target.value)
}}/>
<IconButton >
<Search/>
</IconButton>

<Button variant="text" sx={{backgroundColor:"#757de8"}}><Link to="/addform">Add a form</Link></Button>

<Button variant="text" sx={{backgroundColor:"#757de8"}}><Link to="/viewproduct">View Product</Link></Button>
<Button variant="text" sx={{backgroundColor:"#757de8"}} onClick={()=>{

  navigate("/login")
}}>Logout</Button>
</div>
       </Toolbar>
    </AppBar>  
           <div style={{position:"relative",top:"50px"}}>
            <TableContainer>
                <Table>
   <TableHead>
       <TableRow>
        <TableCell>
            Item Name
        </TableCell>
         <TableCell>
            Price 
         </TableCell>
         <TableCell>
            Quantity
         </TableCell>
       </TableRow>
   </TableHead>
               
   {
    itemarray.filter((e)=>{

  return e.itemName.search(search)>=0

    }).map((e)=>{

        return <TableRow data-testid="itemtest">
   <TableCell>
     {e.itemName}
   </TableCell>
    <TableCell>
        {e.price}
    </TableCell>
  <TableCell>
    {e.quantity}
  </TableCell>
   <TableCell>
    <Button onClick={()=>{
        alert("Do you want to delete")
    }}>Delete</Button>
   </TableCell>
        </TableRow>
    })
   }

         </Table>
            </TableContainer>   
               
        </div>
        </div>
        <div style={{margin:"50px"}}>
        <Outlet></Outlet>
        </div>
        
   </>
        
        )
}
export default ViewData
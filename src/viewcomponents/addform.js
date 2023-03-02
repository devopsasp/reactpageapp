import { Input,Button,Paper } from "@mui/material"
import { ItemArray } from "./data"
import { useState } from "react"
import axios from 'axios'
function AddForm()
{
    const [itemname,setItemName]=useState()
    const [price,setPrice]=useState()
    const [quantity,setQuantity]=useState()
    const [message,setMessage]=useState()
    return (<div>
         <Paper>   
            <h3>Add Product Details</h3>
          Enter Item Name <Input type ='text'   value={itemname} inputProps={{"data-testid":"itemname"}}
           onChange={(e)=>{
            setItemName(e.target.value)
           }}
          /><br/>
          Enter Price <Input type='text' value={price} inputProps={{"data-testid":"price"}}  onChange={(e)=>{
            setPrice(e.target.value)
          }}/><br/>
          Enter Quantity<Input type='text' value={quantity} inputProps={{"data-testid":"quantity"}} onChange={(e)=>{
            setQuantity(e.target.value)
          }}/><br/>
          <Button data-testid="addbtn"
          onClick={()=>{
            var item={
                itemName:itemname,
                price:price,
                quantity:quantity
            }
axios.post('http://localhost:9087/additem',item,{'Content-Type':'application/json'}).then((e)=>{
  
}).catch((e)=>{
  setMessage("error "+e)
})
setMessage("data saved")
            console.log(ItemArray)
          }}

          
          >Save Item</Button>
           <div data-testid="message">{message}</div>
         </Paper>

    </div>)
}
export default AddForm
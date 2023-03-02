import pic1 from "../images/blackcoffee.jpeg"
import pic2 from "../images/latte.jpg"
import { Card, CardActions, CardContent,Button,Paper } from "@mui/material"
function ViewProduct()
{
     return (
     <>
     <table>     
        <tr>
            <td>
        <div>
  <Paper elevation={3} sx={{width:"100px",margin:"50px"}}>
  <Card sx={{width:"150px" }}>
    <CardContent>
   <img src={pic1} style={{width:"100px",height:"100px"}}/>
   </CardContent>
   <CardActions>
    <Button>Add to Cart</Button>
   </CardActions>
   </Card>
   </Paper>
   
     </div>
     </td>
     <td>
     <div>
     <Paper elevation={3} sx={{width:"100px",margin:"50px"}}>
  <Card sx={{width:"150px"}}>
    <CardContent>
   <img src={pic2} style={{width:"100px",height:"100px"}}/>
   </CardContent>
   <CardActions>
    <Button>Add to Cart</Button>
   </CardActions>
   </Card>
   </Paper>
     </div>
     </td>
     </tr>
     </table>

     </>
     
     )

}
export default ViewProduct
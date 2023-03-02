

import React from 'react';
import { render, fireEvent,screen } from '@testing-library/react';
//import LoginComp from './auth/sample';
import { ProfileContext } from './context/profilecontext';
import { useContext } from 'react';
import Login from './auth/login';
jest.mock('axios')
import axios from 'axios'
import AddForm from './viewcomponents/addform';
import ViewData from './viewcomponents/viewdata';
/*describe("login test",()=>{
    test("case 1",()=>{
     const setUserName=jest.fn()
     const setPassword=jest.fn()
     const setShowPage=jest.fn()
        render(   
            <ProfileContext.Provider
            value={{ username: 'admin', setUserName, password: 'pass123', setPassword, showPage: false, setShowPage }}
          >
        <Login/>
        </ProfileContext.Provider>
        )
        const user=screen.getByTestId("username")
        const pass=screen.getByTestId("password")
        const login=screen.getByTestId("login")
        const message=screen.getByTestId("message")
       //fireEvent.change(user,{target:{value:"admin"}})
        //fireEvent.change(pass,{target:{value:"pass123"}})
        fireEvent.click(login)
        //expect(setUserName).toHaveBeenCalledWith('admin')
       // expect(setPassword).toHaveBeenCalledWith('pass123')
        expect(message.textContent).toBe("valid username and password")
    })
})








describe("case 2",()=>{
  test("test 2 ",()=>{
  axios.get.mockResolvedValue({data:"data saved"}) 
      render(<AddForm/>)
      const itemname=screen.getByTestId("itemname")
      const price=screen.getByTestId("price")
      const quantity=screen.getByTestId("quantity")
      const btn=screen.getByTestId("addbtn")

      fireEvent.change(itemname,{target:{value:"coffee"}})
      fireEvent.change(price,{target:{value:20}})
      fireEvent.change(quantity,{target:{value:10}})
      fireEvent.click(btn)
    const message=screen.getByTestId("message")
    
    expect(message.textContent).toBe("data saved")
    

  })
})
*/




const ItemArray=[{
  itemName:"Coffee",
  price:20,
  quantity:10
},
{
 itemName:"Espresso",
 price:25,
 quantity:15
},
{
 itemName:"Latte",
 price:35,
 quantity:27
},
{
 itemName:"Black Coffee",
 price:45,
 quantity:29
}]
describe("view data ",()=>{
  test("test case 1 ",async ()=>{

axios.get.mockResolvedValue({data:ItemArray})
render(<ViewData/>)

const itemlength=await waitFor(()=>screen.findAllByTestId("itemtest"))
expect(itemlength).toHaveLength(4)
  })
})













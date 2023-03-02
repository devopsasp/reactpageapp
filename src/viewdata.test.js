import React from 'react';
import { render, fireEvent,screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ViewData from './viewcomponents/viewdata';
import { waitFor } from '@testing-library/react';
jest.mock('axios')
import axios from 'axios'
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
  render(<BrowserRouter><ViewData/></BrowserRouter>)

  const itemlength=await waitFor(()=>screen.findAllByTestId("itemtest"))
expect(itemlength).toHaveLength(4)
    })
})
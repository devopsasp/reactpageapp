//import logo from './logo.svg';
import './App.css';
import Login from './auth/login';
import Register from './auth/registration';
import { useState } from 'react';
import ViewData from './viewcomponents/viewdata';
import { ProfileContext } from './context/profilecontext';
import { BrowserRouter,Route,Routes } from "react-router-dom"

function App() {
  const [showPage ,setShowPage]=useState(false)

  const [username,setUserName]=useState('')
  const [password,setPassword]=useState('')
 

 return <div><ProfileContext.Provider value={{username,setUserName,password,setPassword,showPage,setShowPage}}>
  {showPage?<ViewData/>:<Login/>}
  </ProfileContext.Provider></div>
}

export default App;

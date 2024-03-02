import React from 'react'
import  Header  from "./components/Header/Header.jsx";
import { Outlet } from 'react-router-dom';
import  Footer  from "./components/Footer/Footer.jsx";
import  Contact  from "./components/Contact/Contact.jsx";
import  Github  from "./components/Github/Github.jsx";
 import  User  from "./components/User/User.jsx";           

function Layout() {
  return (
    <>
     <Header/>     
     <Outlet/>
     <Footer/>  
     <Contact/>  
     <Github/> 
     <User/>
     
    </>
  )
}

export default Layout

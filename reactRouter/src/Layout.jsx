import React from 'react'
import  Header  from "./components/Header/Header.jsx";
import { Outlet } from 'react-router-dom';
import  Footer  from "./components/Footer/Footer.jsx";
import  Contact  from "./components/Contact/Contact.jsx";

function Layout() {
  return (
    <>
     <Header/> 
     <Outlet/>
     <Footer/>  
     <Contact/>   
    </>
  )
}

export default Layout

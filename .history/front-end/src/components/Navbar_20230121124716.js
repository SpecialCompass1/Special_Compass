import React from "react";
import { FaBars, FaTimes } from "react-icons/fa"
import { useRef } from "react";
import Logo from './SC_Logo.png';
import "./Navbar.css";

 export const Navbar = () => {

    const navRef = useRef();
    const showNavbar = () => {
  
    navRef.current.classList.toggle("responsive_nav");
 }
    return(
      <>
        <header>
       
        <a href = "/" className="site-title"><img src={Logo} className="App-logo" alt="logo" /> </a>
           
          <nav ref={navRef}>
          
           <a href="/"> Signup</a>
           <a href="/login"> LogIn</a>

            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                <FaTimes></FaTimes>
            </button>
           
          </nav>  
          <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
          </button>
        
          </header>
</>
       
    );
}

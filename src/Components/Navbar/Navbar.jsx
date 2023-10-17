import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css"
export default function Navbar() {
    return <>
    <nav>
      <div className="d-flex container justify-content-center align-items-center">
        <li ><Link to="" className="logo">START FRAMEWORK</Link></li>
        
      <ul className="d-flex ms-auto w-25 justify-content-between m-0 ">
        <li><NavLink to="">ABOUT</NavLink></li>
        <li><NavLink to="Portfolio">PORTFOLIO</NavLink></li>
        <li><NavLink to="contact">CONTACT</NavLink></li>
      </ul>
      </div>
      
     
    </nav>










  </>
}

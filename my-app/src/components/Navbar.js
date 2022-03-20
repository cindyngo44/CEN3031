import logo from '../images/Logo_icon.png';
import '../App.css';
import '../Navbar.css';

import React from 'react'
import {  Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleVisibility() {
  var x = document.getElementById("navResponsive");
  if (x.className === "nav-links") {
    x.className += " responsive";
  } else {
    x.className = "nav-links";
  }
}

export default function Navbar() { {/* Navbar component */}
  return (
    
      <header className="nav-header">
        {/* Navbar Links: div must be contained in div:navbar in order for link to to work */}
        <div id="navbar">
          <div className="nav-links" id="navResponsive">
            <Link to="/" id="navbar-Home">Home</Link>
            <Link to="/About" id="navbar-About">About Us</Link>
            <Link to="/Login" id="navbar-Login">Login/Register</Link>
            <FontAwesomeIcon icon="fa-bars fa-solid" className="icon" onClick={toggleVisibility}/>
          </div>
        </div>
        <Link to="/" > <img src={logo} className="sesh-logo" alt="logo" /> </Link>   {/* Logo  */}
      </header>
    
  )
}


import logo from '../Logo_icon.png';
import '../App.css';

import React from 'react'
import {  Link } from "react-router-dom";

export default function Navbar() { {/* Navbar component */}
  return (
    
      <header className="home-header">
        {/* Navbar Links: div must be contained in div:navbar in order for link to to work */}
        <div id="navbar">
          <div id="nav-links">
            <Link to="/" id="navbar-Home">Home</Link>
            <Link to="/About" id="navbar-About">About Us</Link>
            <Link to="/Login" id="navbar-Login">Login/Register</Link>
          </div>
        </div>
        <Link to="/" > <img src={logo} className="sesh-logo" alt="logo" /> </Link>   {/* Logo  */}
      </header>
    
  )
}


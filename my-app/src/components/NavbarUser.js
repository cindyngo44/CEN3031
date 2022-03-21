import logo from '../images/Logo_icon.png';
import '../App.css';
import '../Navbar.css';

import React from 'react'
import {  Link } from "react-router-dom";


export default function Navbar() { {/* Navbar component */}
  return (
    
      <header className="nav-header">
        {/* Navbar Links: div must be contained in div:navbar in order for link to to work */}
        <div className="navbar">
          <div className="nav-links" id="navResponsive">
            <Link to="/" className="navbar-text">Sesh</Link>
            <Link to="/" className="navbar-text">Profile</Link>
            <Link to="/" className="navbar-text">Leaderboard</Link>
            <Link to="/" className="navbar-text">Logout</Link>
          </div>
        </div>
        <Link to="/" > <img src={logo} className="sesh-logo" alt="logo" /> </Link>   {/* Logo  */}
      </header>
    
  )
}


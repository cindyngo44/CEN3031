import logo from '../Logo_icon.png';
import '../App.css';

import React from 'react'
import {  Link } from "react-router-dom";

export default function Navbar() {
  return (
    
      <header className="home-header">
        <div id="navbar"></div>
        <Link to="/" > <img src={logo} className="sesh-logo" alt="logo" /> </Link>   
      </header>
    
  )
}


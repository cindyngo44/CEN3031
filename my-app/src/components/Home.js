import logo from '../logo.svg';
import '../App.css';

import React from 'react'
import {  Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="Home">
      <header className="home-header">
        <div id="navbar"></div>
        <img src={logo} className="sesh-logo" alt="logo" />
      </header>
      <h1>Welcome to Sesh</h1>
      <p>Study amoung us</p>
      <Link to="/Login" > <button className="btn login-register">Login/Register</button> </Link>
      <br />
      
    
      <Link to="/About" > <button className="btn about-us">About Us</button> </Link>         
    
    </div>
  )
}


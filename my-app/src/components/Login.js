import logo from '../logo.svg';
import '../App.css';

import React from 'react'
import {  Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="Home">
      <header className="home-header">
        <div id="navbar"></div>
        <img src={logo} className="sesh-logo" alt="logo" />
      </header>
      <h1>Login</h1>
      <br/>
         
      <Link to="/" > <button className="btn about-us">Home</button> </Link>         
    
    </div>
  )
}


import '../App.css';
import React from 'react'
import {  Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="Home">
      
      <h1>Welcome to Sesh</h1>
      <p>Study Among Us</p>
      
      <Link to="/Login" > <button className="btn login-register">Login/Register</button> </Link>

      <br />
    
      <Link to="/About" > <button className="btn about-us">About Us</button> </Link>         
    
    </div>
  )
}


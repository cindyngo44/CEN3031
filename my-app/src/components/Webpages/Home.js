import '../../App.css';
import '../Webpages/Home.css';
import React from 'react'
import {  Link } from "react-router-dom";
import Navbar from '../Webpage-Components/Navbar';

export default function Home() {
  return (
    <div>
    <Navbar/>
    <div className="background-gradient" id="home">
      
      <h1 id="home-h1">Welcome to Sesh</h1>
      <p id="home-p">Study Among Us</p>
      {/* Homepage Buttons */}
      <Link to="/Login" > <button className="sesh-btn login-register">Login/Register</button> </Link>
      <br />
      <Link to="/About" > <button className="sesh-btn about-us">About Us</button> </Link>         
    </div>
    </div>
  )
}


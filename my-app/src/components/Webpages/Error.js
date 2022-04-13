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
      
      <h1 id="home-h1">Error 404 Page Not Found</h1>
      <p id="home-p">Sorry this page does not exist</p>
      {/* Homepage Buttons */}
      <Link to="/" > <button className="sesh-btn login-register">Home</button> </Link>
    </div>
    </div>
  )
}
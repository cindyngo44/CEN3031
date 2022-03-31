import '../Webpages/Register.css';
import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Webpage-Components/Navbar';

export default function Register() {
    
    return (
      <div>
                <Navbar/>
        <div className="background-gradient" id="registration">
        <div className="wrapper">
        <h2>Registration</h2>
        <form action="#">
          <div className="input-box">
            <input type="text" placeholder="Enter Your Name" required></input>
          </div>
          <div className="input-box">
            <input type="text" placeholder="Enter Your Email" required></input>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Create Password" required></input>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Confirm Password" required></input>
          </div>
          <div className="input-box">
            <input type="number" placeholder="Enter Your Age" required></input>
          </div>
          <div className="policy">
            <input type="checkbox"></input>
            <h3>I accept all terms and conditions</h3>
          </div>
          <div className="input-box button">
            <input type="Submit" value="Register Now"></input>
          </div>
          <div className="text">
            <h3>Already have an account? 
            <Link to="/Login"> Login now</Link></h3>
          </div>
        </form>
      </div>
      </div>
      </div>
    )
  }
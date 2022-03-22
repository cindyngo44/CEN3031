import logo from '../images/logo.svg';
import '../Register.css';
import Navbar from './Navbar';
import React from 'react'
import { Link } from 'react-router-dom';

export default function Register() {
    
    return (
        <div className="background-gradient" id="registration">
        <div className="wrapper">
        <h2>Registration</h2>
        <form action="#">
          <div className="input-box">
            <input type="text" placeholder="Enter your name" required></input>
          </div>
          <div className="input-box">
            <input type="text" placeholder="Enter your email" required></input>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Create password" required></input>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Confirm password" required></input>
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
            <Link to="/LoginNow"> Login now</Link></h3>
          </div>
        </form>
      </div>
      </div>
    )
  }
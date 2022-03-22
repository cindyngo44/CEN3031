import logo from '../images/logo.svg';
import '../LoginNow.css';
import Navbar from './Navbar';
import React from 'react'
import { Link } from 'react-router-dom';

export default function LoginNow() {
    
    return (
        <div className="background-gradient" id="loginNow">
           <div className="wrapper">
      <div className="title">Login Form</div>
      <form action="#">
        <div className="field">
          <input type="text" required></input>
          <label>Email Address</label>
        </div>
        <div className="field">
          <input type="password" required></input>
          <label>Password</label>
        </div>
        <div className="content">
          <div className="checkbox">
            <input type="checkbox" id="remember-me"></input>
            <label for="remember-me">Remember me</label>
          </div>
          <div className="pass-link"><a href="#">Forgot password?</a></div>
        </div>
        <div className="field">
          <input type="submit" value="Login"></input>
        </div>
        <div className="signup-link"><Link to="/Register">Not a member?</Link>
        </div>
      </form>
    </div>
            </div>
    )
  }
import React from 'react'
import '../Register.css';
import {  Link } from "react-router-dom";
import {useState} from 'react';

export default function Register() {
    const container = document.querySelector(".container"),
    pwShowHide = document.querySelectorAll(".showHidePw"),
    pwFields = document.querySelectorAll(".password"),
    signUp = document.querySelector(".signup-link"),
    login = document.querySelector(".login-link");

  //   js code to show/hide password and change icon
  pwShowHide.forEach(eyeIcon =>{
      eyeIcon.addEventListener("click", ()=>{
          pwFields.forEach(pwField =>{
              if(pwField.type ==="password"){
                  pwField.type = "text";

                  pwShowHide.forEach(icon =>{
                      icon.classList.replace("uil-eye-slash", "uil-eye");
                  })
              }else{
                  pwField.type = "password";

                  pwShowHide.forEach(icon =>{
                      icon.classList.replace("uil-eye", "uil-eye-slash");
                  })
              }
          }) 
      })
  })


  // js code to appear signup and login form
  /*signUp.addEventListener("click", ( )=>{
      container.classList.add("active");
  });
  login.addEventListener("click", ( )=>{
      container.classList.remove("active");
  });*/
  return (
    <div className="background-gradient" id="registration">
      <div className="container">
          <div className="forms">
              <div className="form login">
                  <span className="title">Login</span>
                  <form action="#">
                      <div className="input-field">
                          <input type="text" placeholder="Enter your email" required></input>
                          <i className="uil uil-envelope icon"></i>
                      </div>
                      <div className="input-field">
                          <input type="password" className="password" placeholder="Enter your password" required></input>
                          <i className="uil uil-lock icon"></i>
                          <i className="uil uil-eye-slash showHidePw"></i>
                      </div>

                      <div className="checkbox-text">
                          <div className="checkbox-content">
                              <input type="checkbox" id="logCheck"></input>
                              <label for="logCheck" className="text">Remember me</label>
                          </div>
                          
                          <Link to="#" className="text">Forgot password?</Link>
                      </div>

                      <div className="input-field button">
                          <input type="button" value="Login Now"></input>
                      </div>
                  </form>

                  <div className="login-signup">
                      <span className="text">Not a member?
                          <Link to="#" className="text signup-link">Signup now</Link>
                      </span>
                  </div>
              </div>

              {/* Registration Form */}
              <div className="form signup">
                  <span className="title">Registration</span>

                  <form action="#">
                      <div className="input-field">
                          <input type="text" placeholder="Enter your name" required></input>
                          <i className="uil uil-user"></i>
                      </div>
                      <div className="input-field">
                          <input type="text" placeholder="Enter your email" required></input>
                          <i className="uil uil-envelope icon"></i>
                      </div>
                      <div className="input-field">
                          <input type="password" className="password" placeholder="Create a password" required></input>
                          <i className="uil uil-lock icon"></i>
                      </div>
                      <div className="input-field">
                          <input type="password" className="password" placeholder="Confirm a password" required></input>
                          <i className="uil uil-lock icon"></i>
                          <i className="uil uil-eye-slash showHidePw"></i>
                      </div>

                      <div className="checkbox-text">
                          <div className="checkbox-content">
                              <input type="checkbox" id="sigCheck"></input>
                              <label for="sigCheck" className="text">Remember me</label>
                          </div>
                          
                          <Link to="#" className="text">Forgot password?</Link>
                      </div>

                      <div className="input-field button">
                          <input type="button" value="Login Now"></input>
                      </div>
                  </form>

                  <div className="login-signup">
                      <span className="text">Not a member?
                          <Link to="#" className="text login-link">Signup now</Link>
                      </span>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}
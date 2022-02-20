import logo from '../logo.svg';
import '../App.css';
import { useState } from 'react';
import React from 'react'
import {  Link } from "react-router-dom";
import Form from "./Form";
import Navbar from './Navbar';

 function Login() {

  const [user, setUser] = useState({name: ""});
  const [error, setError] = useState("");

  const Login =  details => {
    console.log(details);

    setUser({
      name: details.name
    })
  }

  const Logout = () => {
    setUser({name: ""});
    console.log("Logout");
  }


  return (
    <div className="Home">
      {(user.name !== "") ? (
         <div>
          <Navbar/>
      <br/>
      <h1>Welcome, <span>{user.name}</span> </h1> 
      <button className='btn login-submit' onClick={Logout}> Logout </button>
         </div>
      ) 
    :
    (
      <div>
      <Navbar/>
 <br/>
 <Form Login={Login} error={error} />
 <br/>
 <Link to="/" > <button className="btn about-us">Home</button> </Link>   
    </div>
    )}
            
    
    </div>
  )
}

export default Login;


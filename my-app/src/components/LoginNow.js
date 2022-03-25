import logo from '../images/logo.svg';
import '../LoginNow.css';
import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';



export default function LoginNow() {
    const [user, setUser] = useState({name: ""}); {/* Define react use states for handleing variables  */}
    const [password, setPassword] = useState({password: ""});
    const [logged, setLogged] = useState(false);
    // const [error, setError] = useState("");
  
     function Login(){
      console.log(user);
      localStorage.setItem("user",user);
      setLogged(validLogin);
      if(validLogin() === false){
        alert("Error either your username or password is incorrect");
      }
     } {/* Login for now just sets the useState user equal to the name inputed  from the details array in the Form component*/}

    function validLogin(){
      if(user === "admin" && password === "admin" ){
          return true;
      }
      else{
        return false;
      }



    }
    

    
    return (
      <div>
          <Navbar/>
        <div className="background-gradient" id="loginNow">
           <div className="wrapper">
      <div className="title">Login Form</div>
      <form action="#">
        <div className="field">
          <input type="text" required onChange={e => setUser(e.target.value)} />
          <label>Username</label>
        </div>
        <div className="field">
          <input type="password" required onChange={e => setPassword(e.target.value)}/>
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
          <input type="submit" value="Login" onClick={Login}></input>
        </div>
        <div className="signup-link"><Link to="/Register">Not a member?</Link>
        </div>
      </form>
      { logged ? (<Navigate replace to="/Profile" />) : null }
    </div>
            </div>
            </div>
    )
  }
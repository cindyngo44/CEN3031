import '../App.css';
import { useState } from 'react';
import React from 'react'
import {  Link } from "react-router-dom";
import Form from "./Form";

 function Login() {

  const [user, setUser] = useState({name: ""}); {/* Define react use states for handleing variables  */}
  const [error, setError] = useState("");

  const Login =  details => { {/* Login for now just sets the useState user equal to the name inputed  from the details array in the Form component*/}
    console.log(details);

    setUser({ 
      name: details.name
    })
  }

  const Logout = () => { {/* Sets name back to null */}
    setUser({name: ""});
    console.log("Logout");
  }


  return (
    <div className="Home">
      {(user.name !== "") ? //checks if name is not empty
      
      ( 
          //name is not empty displays this logged in message
         <div>
      <br/>
      <h1>Welcome, <span>{user.name}</span> </h1> 
      <button className='btn login-submit' onClick={Logout}> Logout </button>
         </div>
      ) 
    :
    (
      //else diplays login page
      <div>
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


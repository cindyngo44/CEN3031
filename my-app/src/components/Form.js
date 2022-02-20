import React from 'react'
import {useState} from 'react';

function Form({ Login, error }) {
    const [details, setDetails] = useState({name: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

  return (
    <form onSubmit={submitHandler}>
        <div className="form-inner">
            <h1>Login</h1>
            <br/>

            <div className = "form-group"> 
            <label> Username: </label>
            <input className="login-input" type= "text" name="name" id = "name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
            </div>

            <div className = "form-group"> 
            <label> Password: </label>
            <input className="login-input" type= "password" name="password" id = "password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
            </div>

            <input className = "btn login-submit" type="submit" value = "Login"/>

        </div>
        </form>
  )
}

export default Form
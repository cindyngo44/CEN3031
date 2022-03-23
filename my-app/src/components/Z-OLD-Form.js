// import React from 'react'
// import '../Form.css';
// import {useState} from 'react';

// function Form({ Login, error }) {
//     const [details, setDetails] = useState({name: "", password: ""});

//     const submitHandler = e => {
//         e.preventDefault(); //doesnot allow default values to trigger login function

//         Login(details); // fills the login parameter with name and password
//     }

//   return (
//     // defines form that when submitted with the submit input runs the submit handler 
//     <form onSubmit={submitHandler}> 
//         <div className="form-inner">
//             <h1>Login</h1>
//             <br/>

//             <div className = "form-group"> 
//             <label> Username: </label>
//             <input className="login-input" type= "text" name="name" id = "name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
//             </div>
//             <br/>
//             <div className = "form-group"> 
//             <label> Password: </label>
//             <input className="login-input" type= "password" name="password" id = "password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
//             </div>
//             <br/>
//             <input className = "btn login-submit" type="submit" value = "Login"/>

//         </div>
//         </form>
//   )
// }

// export default Form

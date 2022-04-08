import '../Webpages/LoginNow.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Webpage-Components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'



class LoginNow extends Component {
  constructor() {
    super();

    this.state = {
      username:'',
      password:'',
      //passwordTwo:'',
      //age:''

    }

      this.changeName = this.changeName.bind(this);
      this.changePassword = this.changePassword.bind(this);
      //this.changePasswordTwo = this.changePasswordTwo.bind(this);
      //this.changeAge = this.changeAge.bind(this);
      this.onSubmit= this.onSubmit.bind(this);
     
    
}

    changeName(event) {
        this.setState({
          username:event.target.value
        })
    
      }
    

    
      changePassword(event) {
        this.setState({
          password:event.target.value
        })
    
      }

      /*
      changePasswordTwo(event) {
        this.setState({
          passwordTwo:event.target.value
        })
    
      }

      changeAge(event) {
        this.setState({
          age:event.target.value
        })
    
      }
      */
    

      onSubmit(event) {
        event.preventDefault()

        const loggedIn = {
          username: this.state.username,
          password:this.state.password,
          //passwordTwo:this.state.passwordTwo,
         // age:this.state.age
        }

        axios.post('http://localhost:4000/app/login', loggedIn)
          .then(response => console.log(response.data))


        // if we had a profile page to go to here is where we'd write window.location =/sesh

        this.setState(
          {
            username:'',
            password:'',
            //passwordTwo:'',
            //age:''
          }
        )
    
      }
    

    
  
    

      render() {
    return (
      <div>
          <Navbar/>
        <div className="background-gradient" id="loginNow">
           <div className="wrapper">
      <div className="title">Login Form</div>
      <form onSubmit={this.onSubmit}>
        <div className="field">
          <input type="text" required
          onChange={this.changeName}
          value = {this.state.username}/>
          <label>Username</label>
        </div>
        <div className="field">
          <input type="password" required 
          onChange={this.changePassword}
          value = {this.state.password}/>
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
    <input type="Submit" value="Login"></input>
  </div>
        <div className="signup-link"><Link to="/Register">Not a member?</Link>
        </div>
      </form>
    </div>
            </div>
            </div>
    )
      }
  }

  export default LoginNow;
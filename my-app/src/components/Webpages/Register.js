import React, { Component } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import Navbar from '../Webpage-Components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'

class Register extends Component {
  constructor() {
    super();


    this.state = {
      name:'',
      phone:'',
      email:'',
      password:'',
      //passwordTwo:'',
      //age:''

    }

      this.changeName = this.changeName.bind(this);
      this.changePhone = this.changePhone.bind(this);
      this.changeEmail = this.changeEmail.bind(this);
      this.changePassword = this.changePassword.bind(this);
      //this.changePasswordTwo = this.changePasswordTwo.bind(this);
      //this.changeAge = this.changeAge.bind(this);
      this.onSubmit= this.onSubmit.bind(this);
     
    
}

    changeName(event) {
        this.setState({
          name:event.target.value
        })
    
      }
    
    changePhone(event) {
        this.setState({
          phone:event.target.value
        })
    
      }

      changeEmail(event) {
        this.setState({
           email:event.target.value
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

        const registered = {
          name: this.state.name,
          phone: this.state.phone,
          email:this.state.email,
          password:this.state.password,
          //passwordTwo:this.state.passwordTwo,
         // age:this.state.age
        }

        axios.post('http://localhost:4000/app/register', registered)
          .then(response => console.log(response.data))


        // if we had a profile page to go to here is where we'd write window.location =/sesh

        this.setState(
          {
            name:'',
            phone:'',
            email:'',
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
<div className="background-gradient" id="registration">
<div className="wrapper">
<h2>Registration</h2>
<form onSubmit={this.onSubmit}>
  <div className="input-box">
    <input type="text" 
    placeholder="Enter Your Name" required
    onChange={this.changeName}
    value = {this.state.name}
    ></input>
  </div>
  <div className="input-box">
    <input type="text" 
    placeholder="Enter Your Email" required
    onChange={this.changeEmail}
    value = {this.state.email}
    ></input>
  </div>
  <div className="input-box">
    <input type="Phonenumber" 
    placeholder="Phonenumber" required
    onChange={this.changePhone}
    value = {this.state.phone}
    ></input>
  </div>
  <div className="input-box">
    <input type="password" 
    placeholder="Create Password" required
    onChange={this.changePassword}
    value = {this.state.password}
    ></input>
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
}

export default Register;
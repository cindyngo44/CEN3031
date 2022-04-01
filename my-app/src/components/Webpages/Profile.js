import NavbarUser from '../Webpage-Components/Navbar-User';
import '../Webpages/Profile.css';
import React, { Component } from 'react'


export default class Profile extends Component {
  render() {
    return (
      <div className="background-gradient">
      <NavbarUser/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="profile">
        <h1>Welcome, {localStorage.getItem("user")} !</h1>
      </div>
      </div>
    )
  }
}


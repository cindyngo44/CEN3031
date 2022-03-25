import NavbarUser from './Navbar-User';

import React, { Component } from 'react'


export default class Profile extends Component {
  render() {
    return (
      <div>
      <NavbarUser/>
      <br/>
      <br/>
      <h1>Welcome {localStorage.getItem("user")} </h1>
      </div>
    )
  }
}


import NavbarUser from '../Webpage-Components/Navbar-User';
import '../Webpages/Profile.css';
import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../App";
import axios from 'axios'

const Profile = () => {

  const { userData, setUserData } = useContext(UserContext);


    return (
      <div className="background-gradient">
      <NavbarUser/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="profile">
        <h1>User Profile</h1>
        <h4><b>User ID:{userData.user.id}</b></h4><br/>
        <h4><b>Username:{userData.user.username}</b></h4><br/>
        <h4><b>Email:{userData.user.email}</b></h4><br/>
        <h4><b>Studied Time:{userData.user.studiedTime}</b></h4><br/>
        <h4><b>Sesh Streak:{userData.user.seshStreak}</b></h4><br/>
      </div>
      </div>
    )
  }
  export default Profile


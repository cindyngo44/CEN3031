import NavbarUser from '../Webpage-Components/Navbar-User';
import '../Webpages/Profile.css';
import React, {useState, useEffect, Component } from "react";
import Streak from "../pageComponents/Streak";
import StudyTime from "../pageComponents/Study-Time";
import UserInfo from "../pageComponents/User-Information";
import axios from 'axios'

const Profile = () => {
    return (
      <div className="background-gradient">
        <NavbarUser/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="profile">
        </div>
        <div className="flex">
          <UserInfo/>
          <div className="flex column-flex">
            <Streak/>
            <br/>
            <StudyTime/>
          </div>
        </div>
      </div>
    )
  }
  export default Profile


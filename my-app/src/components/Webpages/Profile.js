import NavbarUser from '../Webpage-Components/Navbar-User';
import '../Webpages/Profile.css';
import React, { useContext, useState, useEffect, Component } from "react";
import Streak from "../pageComponents/Streak";
import StudyTime from "../pageComponents/Study-Time";
import UserInfo from "../pageComponents/User-Information";
import axios from 'axios'

const Profile = () => {
  //const [username, setName] = useState("");
  //const [email, setEmail] = useState("");
//  let token = localStorage.getItem("authToken");
//  console.log(token);
//   const { data } = axios.get(
//     "http://localhost:5000/api/auth/profile",
//     {
//       params: {
//         token : token
//       }
//     }
//   );
  // console.log(data);
  // localStorage.setItem("username", data.username);
  // localStorage.setItem("email", data.email);
    return (
      <div className="background-gradient">
      <NavbarUser/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="profile">
        {/* <h1>User Profile</h1>
        <h4><b>User ID:</b></h4><br/>
        <h4><b>Username:</b></h4><br/> */}
      </div>
      <Streak/>
      <br/>
      <StudyTime/>
      <br/>
      <UserInfo/>
      </div>
    )
  }
  export default Profile


import "./User-Information.css"
import React, { useContext, useState, useEffect, Component } from "react";
import { UserContext } from "../../App";

export default function UserInformation() {
    const { userData, setUserData } = useContext(UserContext);
    function getUsername(){
        let name = userData.user.username;
        return(name);
    }
    function getEmail(){
    
        let email = "connorsyron@gmail.com";
        return(email);
        }
    function getImageSrc(){
        let src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png";
        return(src);
    }
    return (
    <div className="user-container background-solid-white">
        <div className="header">Profile</div>
        <div className = "user-total">
            <img src={getImageSrc()} className="user-image"></img>
            <h1 className='user-string'><b>Username: </b>{getUsername()} </h1>
            <h1 className='user-string'><b>Email: </b>{getEmail()} </h1>
         
            </div>
        </div>
  )
}

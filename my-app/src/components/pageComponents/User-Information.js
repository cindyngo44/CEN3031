import React from 'react'
import "./User-Information.css"
export default function UserInformation() {
  return (
    <div className="user-container background-solid-white">
        <div className="header">Profile</div>
        <div className = "user-total">
            <img src={getImageSrc()} className="user-image"></img>
            <h1 className='user-string'> Username: {getUsername()} </h1>
            <h1 className='user-string'> Email: {getEmail()} </h1>
            
         
            </div>
        </div>
        
  )
}

function getUsername(){

let name = "Admin";
return(name);

}

function getEmail(){

    let email = "admin53@gmail.com";
    return(email);
    
    }

function getImageSrc(){
    let src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png";
    return(src);
}
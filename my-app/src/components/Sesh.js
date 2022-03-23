import '../App.css';
import '../Sesh.css';
import React from 'react'
import {  Link } from "react-router-dom";
import Todo from './SeshComponents/Todo';
import MusicWidget from './SeshComponents/MusicWidget';
import NavbarUser from './Navbar-User';

export default function Sesh() {
  return (
    <div>
      <NavbarUser/>
    <div className="background-gradient">
      
      <h1>Sesh</h1>   
      <Todo/>
      <MusicWidget/>
    </div>
    </div>
  )
}


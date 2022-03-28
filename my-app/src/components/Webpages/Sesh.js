import '../../App.css';
import '../Webpages/Sesh.css';
import React from 'react'
import Todo from '../SeshComponents/Todo';
import MusicWidget from '../SeshComponents/MusicWidget';
import NavbarUser from '../Webpage-Components/Navbar-User';
import Resources from '../SeshComponents/Resources';
import DefaultTimer from '../SeshComponents/DefaultTimer';

export default function Sesh() {
  return (
    <div>
      <NavbarUser/>
    <div className="background-gradient">
      
      <h1>Sesh</h1>   
      <Todo/>
      <MusicWidget/>
      <Resources/>
      <DefaultTimer/>
    </div>
    </div>
  )
}


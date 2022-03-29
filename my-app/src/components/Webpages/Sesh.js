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
      <div className="outer-container">
        <div className="flex-container">
            <DefaultTimer/>
            <div className='sesh-spacing'></div>
            <Resources/>
          </div>
          <div className="flex-container2">
            <Todo/>
            <div className='sesh-spacing'></div>
            <MusicWidget/>
          </div>
        </div>
      </div>
    </div>
  )
}


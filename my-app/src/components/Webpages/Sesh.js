import '../../App.css';
import '../Webpages/Sesh.css';
import React from 'react'
import Todo from '../SeshComponents/Todo';
import MusicWidget from '../SeshComponents/MusicWidget';
import NavbarUser from '../Webpage-Components/Navbar-User';
import Resources from '../SeshComponents/Resources';
import DefaultTimer from '../SeshComponents/DefaultTimer';
import backgroundVideo from '../../images/CorgiBackground.mp4';

export default function Sesh() {
  return (
    <div>
      <NavbarUser/>
      <video className="background-video" autoPlay loop muted id='video'>
        <source src={backgroundVideo} type='video/mp4'/>
      </video>
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
  )
}


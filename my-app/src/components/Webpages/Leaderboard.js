import NavbarUser from '../Webpage-Components/Navbar-User';
import "./Leaderboard.css";
import React from 'react'
import Board from '../pageComponents/Board';

export default function Leaderboard() {
  return (
    <div className="background-gradient">
        <NavbarUser/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Board/>
    </div>
  )
}
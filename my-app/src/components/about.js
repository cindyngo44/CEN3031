import logo from '../logo.svg';
import '../App.css';
import Navbar from './Navbar';
import React from 'react'
import {  Link } from "react-router-dom";

export default function About() {
  return (
    <div className="Home">
      <br/>
      <br/>
      <h1>About Us ඞ</h1>
      <br/>   
      <h2>  Who are we? </h2>
      <p className="aboutus-text">
     

Due to the consequences of the global pandemic that we are currently experiencing, we noticed that it is difficult to find captivating virtual study environments. And being college students ourselves, we realized that this is a challenging time and sometimes it's hard to avoid burnout and easy to fall victim to feeling alone in the stress and anxiety of work. While being able to address this problem, we also wanted to build a habit tracker to motivate students to persistently keep up with their goals. We aim to create a fun atmosphere that mirrors a gaming environment that inspires students to persevere and accomplish their ambitions while engaging in healthy competition with their peers. We are hopeful that Sesh's leaderboard and point system may further help with keeping students incentivized and help them feel encouraged and motivated by monitoring each other's progress and make friends in this creative workspace! 
</p>
<h2>
Let's talk about Sesh
</h2>
<p className="aboutus-text">
Our project involves a study habit tracker which details the user’s daily activity and statistically computes how often the user keeps up with a specific habit. The study habit tracker stores the user’s statistics using their usernames and passwords as identifiers. We will create a competitive environment by implementing a leaderboard which allows users to participate in a highly motivating workspace. 
</p>
<h2>
What features can you expect to find?
</h2>
<ul className = "about-list">

<li>Calendar streaks </li>
<li>Pie Chart</li> 
<li>User Profile</li>
<li>Leaderboards</li>
<li>Study Seshs with timers, todolists, resource lists and more!</li>
<li>Personalized Teacher Edition</li>
<li>Personalized Parent Edition </li>


</ul>

<br/>   
      <Link to="/" > <button className="btn about-us">Home</button> </Link>      
      <br/>   
    
    </div>
  )
}


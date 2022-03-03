import logo from '../logo.svg';
import '../About.css';
import Navbar from './Navbar';
import React from 'react'
import {  Link } from "react-router-dom";

export default function About() {
  return (
    <div className="About">
      <div className="row">
        <div className="column">
          <div className="about-h1">About Us ඞ</div>
          <div className="about-h2">  Who are we? </div>
          <div className="about-p">
          Due to the consequences of the global pandemic that we are currently experiencing, we noticed that it is 
          difficult to find captivating virtual study environments. And being college students ourselves, we realized 
          that this is a challenging time and sometimes it's hard to avoid burnout and easy to fall victim to feeling 
          alone in the stress and anxiety of work. While being able to address this problem, we also wanted to build a 
          habit tracker to motivate students to persistently keep up with their goals. We aim to create a fun atmosphere 
          that mirrors a gaming environment that inspires students to persevere and accomplish their ambitions while engaging 
          in healthy competition with their peers. We are hopeful that Sesh's leaderboard and point system may further help 
          with keeping students incentivized and help them feel encouraged and motivated by monitoring each other's progress
           and make friends in this creative workspace! 
          </div>
        </div>
        <div className="column">
        <div className="about-h2">Let's talk about Sesh</div>
        <div className="about-p aboutus-text">
        Our project involves a study habit tracker which details the user’s daily activity and statistically computes 
        how often the user keeps up with a specific habit. The study habit tracker stores the user’s statistics using 
        their usernames and passwords as identifiers. We will create a competitive environment by implementing a leaderboard 
        which allows users to participate in a highly motivating workspace. 
        </div>
        <h2 className="about-h2"> What features can you expect to find?</h2>
        <ul className="about-list"> {/* Unordered list */}
          <li>Calendar streaks </li>
          <li>Pie Chart</li> 
          <li>User Profile</li>
          <li>Leaderboards</li>
          <li>Study Seshs with timers, todolists, resource lists and more!</li>
          <li>Personalized Teacher Edition</li>
          <li>Personalized Parent Edition </li>
        </ul>
        </div>
      </div>
      <button className="btn about-us" onclick="window.location.href='https://github.com/cindyngo44/CEN3031'">GitHub</button>
    </div>
  )
}


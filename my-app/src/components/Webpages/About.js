import '../Webpages/About.css';
import Navbar from '../Webpage-Components/Navbar';
import React from 'react'

export default function About() {
  const handleClick = () => {
    window.open("https://github.com/cindyngo44/CEN3031");
  };
  return (
    <div>
      <Navbar/>
    <div className="background-gradient" id="about">
      <div className="about-h1">About Us ඞ</div>
      <div className="about-row background-solid-white">
        {/* First Column */}
        <div className="about-column">
          <div className="about-h2">  Who are we? </div>
          <div className="about-p">
          Due to the consequences of the global pandemic that we are currently experiencing, we noticed that it is 
          difficult to find captivating virtual study environments. And being college students ourselves, we realized 
          that this is a challenging time and sometimes it's hard to avoid burnout and easy to fall victim to feeling 
          alone in the stress and anxiety of work.
          <br></br> 
          <br></br>
          While being able to address this problem, we also wanted to build a 
          habit tracker to motivate students to persistently keep up with their goals. We aim to create a fun atmosphere 
          that mirrors a gaming environment that inspires students to persevere and accomplish their ambitions while engaging 
          in healthy competition with their peers. 
          <br></br>
          <br></br>
          We are hopeful that Sesh's leaderboard and point system may further help 
          with keeping students incentivized and help them feel encouraged and motivated by monitoring each other's progress
           and make friends in this creative workspace! 
          </div>
          <br></br>
          <div id="btn-github" onClick={handleClick}>
          <button className="btn-github-style about-us">Github</button>
          </div>
        </div>
        {/* Second Column */}
        <div className="about-column spacing-top">
          <div className="about-h2">Let's talk about Sesh</div>
          <div className="about-p">
          Our project involves a study habit tracker which details the user’s daily activity and statistically computes 
          how often the user keeps up with a specific habit. The study habit tracker stores the user’s statistics using 
          their usernames and passwords as identifiers. We will create a competitive environment by implementing a leaderboard 
          which allows users to participate in a highly motivating workspace. 
          </div>
          <h2 className="about-h2 spacing-top"> What features can you expect to find?</h2>
          <ul className="about-li"> {/* Unordered list */}
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
      <br></br>
    </div>
    </div>
  )
}
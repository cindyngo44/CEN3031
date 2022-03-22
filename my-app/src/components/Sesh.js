import '../App.css';
import '../Sesh.css';
import React from 'react'
import {  Link } from "react-router-dom";
import Todo from './SeshComponents/Todo';

export default function Sesh() {
  return (
    <div className="background-gradient">
      
      <h1>Sesh</h1>   
    <Todo/>
    
    </div>
  )
}


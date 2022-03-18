import '../App.css';
import '../Sesh.css';
import React from 'react'
import {  Link } from "react-router-dom";
import ToDoList from './SeshComponents/ToDoList';

export default function Sesh() {
  return (
    <div className="Home">
      
      <h1>Sesh</h1>   
    <ToDoList/>
    
    </div>
  )
}


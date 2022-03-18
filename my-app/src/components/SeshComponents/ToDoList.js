import React from 'react'
import {useState} from 'react';

export default function ToDoList() {

  return (
    <div className="todoListMain">
    <div className="header">
      <form onSubmit={this.addItem}>
        <input placeholder="enter task">
        </input>
        <button type="submit">add</button>
      </form>
    </div>
  </div>
  )
}

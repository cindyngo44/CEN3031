
import React from 'react'

export default function Board() {

const handleClick = (e) =>{
    
}


  return (
    <div>
        <h1>Leaderboard</h1>

        <div>
            <button data-id='7' onClick={handleClick}>7 Days</button>
            <button data-id='30' onClick={handleClick}>30 Days</button>
            <button data-id='0' onClick={handleClick}>All Time</button>
        </div>

    </div>
  )
}
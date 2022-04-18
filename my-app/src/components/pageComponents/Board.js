import React, { useState } from 'react'
import Profiles from './Board-Profiles';
import { Leaderboard } from './DB';
import "./Board.css";

export default function Board() {

    const [period, setPeriod] = useState(0);

  const handleClick = (e) => {
     
    setPeriod(e.target.dataset.id)
  }

  return (
    <div className="board">
        <h1 className='leaderboard'>Leaderboard</h1>


        <Profiles Leaderboard={between(Leaderboard)}></Profiles>

    </div>
  )
}
function between(data){
   
    // sort with asending order
    return data.sort((a, b) => {
        if ( a.score === b.score){
            return b.score - a.score;
        } else{
            return b.score - a.score;
        }
    })
}
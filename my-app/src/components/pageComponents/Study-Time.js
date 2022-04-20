import React from 'react'
import "./Study-Time.css"
export default function StudyTime() {

   


    function getStudyTime(){

        let time = 1250;
        return time;
    }

    function TimeConvert(score){
        let min = score;
      
        if(score >= 60){
            let hr = Math.floor(min / 60);
            min = min % 60;
            
          if(hr >= 24){
            let day = Math.floor(hr / 24);
            hr = hr % 24;
            return(day+" days "+hr+" hours "+min + " minutes");
          }
          return(hr+" hours "+min + " minutes");
        }
      
      return(min + "minutes");
      }



  return (
    <div className="study-container background-solid-white">
        <div className="header">Total Study Time</div>
        <div className = "study-total">
            <h1 className='study-string'> {TimeConvert(getStudyTime())} </h1>
            
         
            </div>
        </div>
        
  )
}

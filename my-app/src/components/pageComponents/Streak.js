import React from 'react'
import "./Streak.css"
import white from "../../images/Logo_white.png";
import green from "../../images/Logo_green.png";
export default function Streak() {

    function Day1(){
        let temp = true;

        if(temp){
            return( <img src={green} alt="green logo" className = "streak-logo"/>)
        } 
        else{
            return( <img src={white} alt="white logo" className = "streak-logo"/>)
        }

        
    }

    function Day2(){
        let temp = false;

        if(temp){
            return( <img src={green} alt="green logo" className = "streak-logo"/>)
        } 
        else{
            return( <img src={white} alt="white logo" className = "streak-logo"/>)
        }

        
    }
    function Day3(){
        let temp = true;

        if(temp){
            return( <img src={green} alt="green logo" className = "streak-logo"/>)
        } 
        else{
            return( <img src={white} alt="white logo" className = "streak-logo"/>)
        }

        
    }
    function Day4(){
        let temp = true;

        if(temp){
            return( <img src={green} alt="green logo" className = "streak-logo"/>)
        } 
        else{
            return( <img src={white} alt="white logo" className = "streak-logo"/>)
        }

        
    }
    function Day5(){
        let temp = true;

        if(temp){
            return( <img src={green} alt="green logo" className = "streak-logo"/>)
        } 
        else{
            return( <img src={white} alt="white logo" className = "streak-logo"/>)
        }

        
    }
  


    function getLongStreak(){

        let str = 11;
        return str;
    }

    function getCurStreak(){

        let str = 1;
        return str;
    }



  return (
    <div className="streak-container background-solid-white">
        <div className="header">Habit Tracker</div>
        <div className = "streak-longest">
            <h2>Longest Streak</h2>
            <h2>{getLongStreak()}</h2>
        </div>
        <div className = "streak-current">
            <h2>Current Streak</h2>
            <h2>{getCurStreak()}</h2>
        </div>

        <div className="streak-past-five">
            
            <h2>Past Five Days</h2>
            
            <div> 
            <div  className='streak-days'>
                   <Day5/> <Day4/> <Day3/> <Day2/> <Day1/>
            
            </div>
            </div>
        </div>
        
    </div>
  )
}
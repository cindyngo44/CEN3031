import React from 'react'
import { useState } from 'react'
import "./Resources.css"
export default function Resources() {

    const [value, setValue] = useState("General");

    const handleChange = (event) => {
        setValue(event.target.value);
      };


      function Links() {
        if (value === "General"){
            return(
                <ul>
                 <li><a href="https://www.coolmathgames.com/" target="_blank">Cool Math Games</a></li>
                 <li><a href="https://www.mentalhealthfirstaid.org/mental-health-resources/" target="_blank">Mental Health</a></li>
                 <li><a href="https://www.samhsa.gov/find-help/national-helpline" target="_blank">Helplines</a></li>      
                </ul>
            )
        }
        else if(value === "Math"){
            return(
                <ul>
                 <li><a href="https://www.wolframalpha.com/" target="_blank">Wolfram Alpha</a></li>
                 <li><a href="https://www.mathway.com/Algebra/" target="_blank">Mathway</a></li>     
                </ul>
            )
        }
        else if(value === "Science"){
            return(
                <ul>
                 <li><a href="https://www.khanacademy.org/science" target="_blank">Khan Academy</a></li>
                 <li><a href="https://www.sciencebuddies.org/" target="_blank">Science Buddies</a></li>
                 <li><a href="https://www.webmd.com/" target="_blank">Web MD</a></li>                 
                </ul>
            )
        }
        else if(value === "Social Studies"){
            return(
                <ul>
                 <li><a href="https://www.econedlink.org/" target="_blank">EconEdLink</a></li>
                 <li><a href="https://besthistorysites.net/general-history-resources/" target="_blank">History</a></li>    
                </ul>
            )
        }

      }



  return (
    <div className="resources-container background-solid-white">
    <div className="header">RESOURCES</div>
    <select value={value} onChange={handleChange} className="select" name="selectList" id="selectList">
     <option value="General">General</option>
     <option value="Math">Math</option>
     <option value="Science">Science</option>
     <option value="Social Studies">Social Studies</option>
   </select> 
    <Links/>
   </div>
  )
}

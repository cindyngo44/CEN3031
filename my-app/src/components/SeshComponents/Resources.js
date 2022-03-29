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
                 <li className="resources-li"><a href="https://www.coolmathgames.com/" target="_blank" className="resources-a">Cool Math Games</a></li>
                 <li className="resources-li"><a href="https://www.mentalhealthfirstaid.org/mental-health-resources/" target="_blank" className="resources-a">Mental Health Resources</a></li>
                 <li className="resources-li"><a href="https://www.samhsa.gov/find-help/national-helpline" target="_blank" className="resources-a">Helplines</a></li>      
                </ul>
            )
        }
        else if(value === "Math"){
            return(
                <ul>
                 <li className="resources-li"><a href="https://www.wolframalpha.com/" target="_blank" className="resources-a">Wolfram Alpha</a></li>
                 <li className="resources-li"><a href="https://www.mathway.com/Algebra/" target="_blank" className="resources-a">Mathway</a></li>     
                </ul>
            )
        }
        else if(value === "Science"){
            return(
                <ul>
                 <li className="resources-li"><a href="https://www.khanacademy.org/science" target="_blank" className="resources-a">Khan Academy</a></li>
                 <li className="resources-li"><a href="https://www.sciencebuddies.org/" target="_blank" className="resources-a">Science Buddies</a></li>
                 <li className="resources-li"><a href="https://www.webmd.com/" target="_blank" className="resources-a">Web MD</a></li>                 
                </ul>
            )
        }
        else if(value === "Social Studies"){
            return(
                <ul>
                 <li className="resources-li"><a href="https://www.econedlink.org/" target="_blank" className="resources-a">EconEdLink</a></li>
                 <li className="resources-li"><a href="https://besthistorysites.net/general-history-resources/" target="_blank" className="resources-a">History</a></li>    
                </ul>
            )
        }

      }



  return (
    <div className="resources-container background-solid-white">
    <div className="header">RESOURCES</div>
    <div className="resources-select">
        <select value={value} onChange={handleChange} className="select" name="selectList" id="selectList">
         <option value="General">General</option>
         <option value="Math">Math</option>
         <option value="Science">Science</option>
         <option value="Social Studies">Social Studies</option>
    </select> 
    </div>
    <Links/>
   </div>
  )
}

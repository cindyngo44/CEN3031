import React from 'react'
import "./Inspiration.css"
import {quotes} from "./Quote"
export default function UserInformation() {
  return (
    <div className="insp-container background-solid-white">
        <div className="header">Quote of the Session</div>
        <div className = "insp-total">
            <h1 className='insp-string'>{getQuote()}</h1>
            
         
            </div>
        </div>
        
  )
}

function getQuote(){

 const random = Math.floor(Math.random() * quotes.length);

  return(Item(quotes[random]));





}

function Item(data){
    return (

       
                    <div >
                        <div >
                            
                            <div className='insp-author'>
                                <h3 >{data.quote}</h3>    
                            </div>                
                        </div>
                        <div className='insp-author'>
                            <h3><b>-</b>{data.author}</h3>
                        </div>
                    </div>
                    )
                
    
}
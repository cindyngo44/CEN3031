import React from 'react'

export default function profiles({ Leaderboard }) {
  return (
        <div id="profile">
            {Item(Leaderboard)}
        </div>
  )
}

function Time(score){
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

function Item(data){
    return (

        <>
            {
                data.map((value, index) => (
                    <div className="flex" key={index}>
                        <div className="item">
                            <img src={value.img} alt="" className='image' />
            
                            <div className="info">
                                <h3 className='name leaderboard-name'>{value.name}</h3>    
                            </div>                
                        </div>
                        <div className="item">
                            <span><b>Total Study Time: </b>{Time(value.score)}</span>
                        </div>
                    </div>
                    )
                )
            }
        </>
        
    )
}
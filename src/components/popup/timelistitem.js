import React, { useState} from 'react';
import { serverDate } from "../../data";


function Timelistitem({hours, ampm, fullTime}) {
    
    const [isActive, setActive] = useState(false);
    const handleTimeActive = (e) => {
        e.stopPropagation();
        if (e.target.classList.contains('timelist')) {
            if (e.target.classList.contains('active')) {
                e.target.classList.remove('active')
            } else {
                document.querySelectorAll('.timelist').forEach((element) => {
                    element.classList.remove('active')
                })
                e.target.classList.add('active')
            }
        }
        
    }

  return (
      <div className={`timelist list ${isActive ? 'active' : ""}`} onClick={(e) => handleTimeActive(e)} data-time={fullTime}>{hours}<span>{ampm}</span></div>
  )
}

export default Timelistitem
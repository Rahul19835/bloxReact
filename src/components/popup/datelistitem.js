import React, { useState, useContext } from 'react';
import { CheckTimeContext } from "../contaxt/checktime";


function Datelistitem({fullDate, day, date}) {
    const [isActive, setActive] = useState(false);
    const {selDate, setDate} = useContext(CheckTimeContext);

    const handleDateActive = (e) => {
        var selectdate = e.target.getAttribute('data-date');
        setDate(selectdate);
        e.stopPropagation();
        if (e.target.classList.contains('datelist')) {
            if (e.target.classList.contains('active')) {
                e.target.classList.remove('active')
            } else {
                document.querySelectorAll('.datelist').forEach((element) => {
                    element.classList.remove('active')
                })
                e.target.classList.add('active')
            }
        }
    }
    
  return (
      <div className={`datelist list ${isActive ? 'active' : ""}`} onClick={(e) => handleDateActive(e)} data-date={fullDate}>{day}<span>{date}</span></div>
  )
}

export default Datelistitem
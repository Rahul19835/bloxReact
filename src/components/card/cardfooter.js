import React from 'react'

function Cardfooter(props) {
  return (
    <div className="card-footer">
        <span className="btn site-btn contactrm" data-project_id={props.project_id} onClick={()=>props.togglePopup('contact-rm')}>Contact RM</span>
        <span className="btn site-btn2 bookvisit" data-project_id={props.project_id} onClick={()=>props.togglePopup('site-visit')}>Site Visit</span>
        <span className="btn site-btn3 booknow" data-project_id={props.project_id}>Book Now</span>
    </div>
  )
}

export default Cardfooter
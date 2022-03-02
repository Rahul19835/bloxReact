import React from "react";
import 'react-intl-tel-input/dist/main.css';
import './popup.css';

const EnquiryPopup = (props) =>{
    return(
        <>
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}><i className="la la-times"></i></span>
                <div className="popinner">
                    <div className="popleft">
                        {props.type}
                    </div>
                    <div className="popright">
                         {props.type}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default EnquiryPopup;
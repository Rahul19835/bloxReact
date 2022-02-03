import React, {useState} from "react";
import './header.css';
import {phone, lock, user} from '../../icons/svg-icons';
import logo from '../../images/logo.png';
import { Link } from "react-router-dom";
import Modal from '../../components/popup/popup';

const Header = () =>{
    const [isOpen, setIsOpen] = useState(false);
    const [popupType, setPopupType] = useState();

    const togglePopup = (type) => {
        setIsOpen(!isOpen);
    }
    return(
        <>
        <header>
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-auto">
                        <div className="hlogo">
                            <div className="header-logo">
                                <Link to="/">
                                    <img src={logo} alt="Blox" className="img-fluid" /> 
                                </Link>
                            </div>
                            <span className="version">BETA</span>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="col-auto d-flex align-items-center">
                            <div className="main-menu">
                                <ul>
                                    <li><Link to="#">Buy</Link></li>
                                    <li><Link to="#">Exclusive</Link></li>
                                    <li className="hshort">
                                        <Link to="#">
                                        {/* Shortlist  */}
                                        <div className="short"><i className="la la-heart"></i>
                                        <span id="total_shortlist_project">0</span></div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="call-btn">
                                {/* <span>Call Now</span> */}
                                <a href="tel:+91-8291933333"><i className="icon header-icon" dangerouslySetInnerHTML={{__html: phone}}></i><span>+91-8291933333</span></a>
                            </div>
                            <div className="cal-btn">  
                                <a onClick={() => togglePopup('login')} className="login"><i className="icon" dangerouslySetInnerHTML={{__html: lock}}></i> <span>Login</span></a>
                    
                                <a onClick={() => togglePopup('Register')} href="#" className="reg"><i className="icon" dangerouslySetInnerHTML={{__html: user}}></i> <span>Register</span></a>
                            </div>
                        </div>
                    </div>
                    
                
                </div>
            </div>
            
        </header>
        {isOpen && <Modal handleClose={togglePopup} PopupType={popupType} />}
        </>
    )
}
export default Header;
import React, { useContext } from "react";
import './footer.css';
import { Link } from "react-router-dom";
import logo from '../../images/logo.png';
import companyqr from '../../images/homeqrcode.svg';
import EnquiryPopup from '../../components/popup/enquiry';
import {EnquiryContext} from '../contaxt/enquiry';

const Footer = () =>{
    const {popupState, enqType, setEnq} = useContext(EnquiryContext);
    return(
        <>
        <footer className="p40">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-12">
                        <div className="fqlo">
                            <div className="qr">
                                <img src={companyqr} alt="Blox" className="img-fluid" />
                            </div>
                            <div>
                            <div className="flogo">
                                <Link to="/">
                                    <img src={logo} alt="Blox" className="img-fluid" />
                                </Link>
                            </div>
                            <div className="reraid">
                                <strong>RERA ID: A51900029429</strong>
                            </div>
                            <div className="fsocial">
                                <a href="https://www.facebook.com/india.BLOX" className="facebook" target={"_blank"}>
                                    <i className="la la-facebook"></i>
                                </a>
                                <a href="https://www.linkedin.com/company/blox-xyz/" className="linkndin" target={"_blank"}>
                                    <i className="la la-linkedin"></i>
                                </a>
                                <a href="https://www.instagram.com/blox.xyz/" className="instagram" target={"_blank"}>
                                    <i className="la la-instagram"></i>
                                </a>
                            </div>
                            </div>
                        </div>
                        <div className="copyright">
                            <span>&copy; Copyright {(new Date().getFullYear())} blox.xyz | All right reserved</span>
                        </div>
                    </div>
                    <div className="col-md-4 col-6">
                        <div className="fmenu">
                        <ul>
                            <li><Link to="#">About Us</Link></li>
                            <li><Link to="#">News</Link></li>
                            <li><Link to="#">Blox RERA</Link></li>
                            <li><Link to="#">Partner</Link></li>
                            <li><Link to="#">Contact Us</Link></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-6">
                        <div className="fmenu">
                        <ul>
                            <li><Link to="#">Privacy</Link></li>
                            <li><Link to="#">Terms & Conditions</Link></li>
                            <li><Link to="#">Refund Policy</Link></li>
                            <li><Link to="#">Disclaimer</Link></li>
                            <li><Link to="#">Developers</Link></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        { popupState?<EnquiryPopup handleClose={()=>setEnq(false)} type={enqType} />:""}
        
        </>
    )
}

export default Footer;

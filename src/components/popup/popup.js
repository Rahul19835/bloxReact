import React, {useState} from "react";
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import './popup.css';
import {user} from '../../icons/svg-icons';
import accounticon from '../../images/regicon.png';
import fbicon from '../../images/fblog.png';
import googleicon from '../../images/google.png';


const Popup = (props) =>{
    return(
        <>
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}><i className="la la-times"></i></span>
                <div className="popinner">
                    <div className="popleft">
                        <div className="popleftInner">
                            <div>
                                <div className="title">Home buying will never be the same!</div>
                                <ul>
                                    <li>Shortlist more properties for site visits &amp; evaluation</li>
                                    <li>Rate your experience with us and give feedback</li>
                                </ul>
                            </div>
                            <div>
                                <p>New To Blox?</p>
                                <span className="popupleftbtn"><i className="icon" dangerouslySetInnerHTML={{__html: user}}></i> Create an account</span>
                            </div>
                        </div>
                    </div>
                    <div className="popright">
                    <div className="popRightInner">
                        <div className="login">
                            <div className="account-form">
                                <div className="title">{props.PopupType} to Continue</div>
                                <div className="aficon">
                                    <img src={accounticon} alt="Register" className="img-fluid" />
                                </div>
                                <form>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend p-0">
                                            <div className="flagIn">
                                                <IntlTelInput defaultCountry={'in'} onlyCountries={["AF","AL","DZ","AS","AD","AO","AQ","AG","AR","AM","AW","AU","AZ","BS","BH","BD","BY","BE","BZ","BJ","BM","BT","BO","BA","BW","BV","IO","BN","BG","BI","KH","CM","CV","CF","TD","CX","CC","KM","CG","CD","CK","CR","CI","HR","CU","DK","DJ","DM","EG","GQ","ER","ET","FK","FO","FJ","FI","FR","GF","PF","TF","GA","GM","GE","DE","GH","GI","GR","GL","GP","GU","GN","GW","GY","HT","HM","VA","HN","HK","HU","IS","IN","IR","IQ","IE","IT","JO","KZ","KI","KP","KR","KW","KG","LA","LV","LB","LS","LR","LY","LI","LU","MO","MK","MG","MW","MV","ML","MT","MH","MQ","MR","MU","YT","MX","FM","MD","MC","MN","MS","MA","MZ","MM","NA","NR","NP","NL","AN","NC","NI","NE","NG","NU","NF","MP","NO","OM","PK","PW","PS","PA","PG","PY","PN","PL","PT","QA","RE","RO","RU","RW","SH","KN","LC","PM","VC","WS","SM","ST","SA","SN","CS","SC","SL","SG","SK","SI","SB","SO","ZA","GS","LK","SD","SR","SJ","SZ","CH","SY","TW","TJ","TZ","TH","TL","TG","TK","TO","TN","TR","TM","TC","TV","UG","UA","AE","GB","US","UY","UZ","VU","VE","VG","VI","WF","EH","YE","ZM","ZW"]} separateDialCode={true} preferredCountries={[]} useMobileFullscreenDropdown={true}/>
                                                <input type="hidden" className="form-control country_code" name="country_code" id="floatingSelect" value="" />
                                            </div>
                                        </div>
                                        <input type="text" className="form-control" id="lemail" placeholder="Email/Phone" />
                                    </div>
                                    <div className="btn-sec">
                                        <button type="submit" id="email_continue_btn" className="btn sub-btn text-left">Login</button>
                                    </div>
                                </form>
                                <span class="or">or Log In with</span>
                            </div>
                            <div class="social-login">
                                <a href="#" class="fblog"><div className="icon"><img src={fbicon} class="img-fluid" /></div>Log In with Facebook</a>
                                <a href="#" class="glog" id="glog"><div className="icon"><img src={googleicon} class="img-fluid" /></div>Log In with Google</a>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Popup;
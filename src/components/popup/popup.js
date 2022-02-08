import React, {useState, useEffect} from "react";
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import './popup.css';
import {user, lock} from '../../icons/svg-icons';
import accounticon from '../../images/regicon.png';
import fbicon from '../../images/fblog.png';
import googleicon from '../../images/google.png';


const Popup = (props) =>{
    const[PopupType, setPopType ] = useState(props.PopupType);
    const [creatingAccount, setCreatingAccount] = useState(PopupType);
    const [btntext, setbtntext] = useState(PopupType);
    const [titletext, setitletext] = useState(PopupType);

    useEffect(() => {
      setCreatingAccount(PopupType == "login"? "New To Blox?": "Already have an Account?")
      setbtntext(PopupType == "login"? "Create an account": "Login")
      setitletext(PopupType == "login"? "Login": "Register")
    });

    const togglePropType = (type) => {
        setPopType(type)
        setCreatingAccount(PopupType == "login"? "New To Blox?": "Already have an Account?")
        setbtntext(PopupType == "login"? "Create an account": "Login")
        setitletext(PopupType == "login"? "Login": "Register")
    };
    
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
                                <p>{creatingAccount}</p>
                                <span onClick={()=>{togglePropType(PopupType == 'login'? 'Register': 'login')} } className="popupleftbtn">
                                    <div className="btnIn">
                                    <i className="icon" dangerouslySetInnerHTML={{__html: PopupType == 'login'?user:lock}}></i>
                                    {btntext}
                                    </div>
                                </span>
                               
                            </div>
                        </div>
                    </div>
                    <div className="popright">
                    <div className="popRightInner">
                        <div className="login">
                            <div className={`account-form ${PopupType == 'login'?'':'border-bottom-0'}`}>
                                <div className="title">{titletext} to Continue</div>
                                <div className="aficon">
                                    <img src={accounticon} alt="Register" className="img-fluid" />
                                </div>
                                <form>
                                    {PopupType == 'login'?
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend p-0">
                                            <div className="flagIn">
                                                <IntlTelInput defaultCountry={'in'} onlyCountries={["AF","AL","DZ","AS","AD","AO","AQ","AG","AR","AM","AW","AU","AZ","BS","BH","BD","BY","BE","BZ","BJ","BM","BT","BO","BA","BW","BV","IO","BN","BG","BI","KH","CM","CV","CF","TD","CX","CC","KM","CG","CD","CK","CR","CI","HR","CU","DK","DJ","DM","EG","GQ","ER","ET","FK","FO","FJ","FI","FR","GF","PF","TF","GA","GM","GE","DE","GH","GI","GR","GL","GP","GU","GN","GW","GY","HT","HM","VA","HN","HK","HU","IS","IN","IR","IQ","IE","IT","JO","KZ","KI","KP","KR","KW","KG","LA","LV","LB","LS","LR","LY","LI","LU","MO","MK","MG","MW","MV","ML","MT","MH","MQ","MR","MU","YT","MX","FM","MD","MC","MN","MS","MA","MZ","MM","NA","NR","NP","NL","AN","NC","NI","NE","NG","NU","NF","MP","NO","OM","PK","PW","PS","PA","PG","PY","PN","PL","PT","QA","RE","RO","RU","RW","SH","KN","LC","PM","VC","WS","SM","ST","SA","SN","CS","SC","SL","SG","SK","SI","SB","SO","ZA","GS","LK","SD","SR","SJ","SZ","CH","SY","TW","TJ","TZ","TH","TL","TG","TK","TO","TN","TR","TM","TC","TV","UG","UA","AE","GB","US","UY","UZ","VU","VE","VG","VI","WF","EH","YE","ZM","ZW"]} separateDialCode={true} preferredCountries={[]} useMobileFullscreenDropdown={true}/>
                                                <input type="hidden" className="form-control country_code" name="country_code" id="floatingSelect" />
                                            </div>
                                        </div>
                                        <input type="text" className="form-control" id="lemail" placeholder="Email/Phone" />
                                    </div>
                                    :
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <div className="inputIcon">
                                                <i className="la la-envelope"></i>
                                            </div>
                                        </div>
                                        <input type="email" class="form-control" id="emailR" placeholder="Email" />
                                    </div>
                                    }
                                    <div className="btn-sec">
                                        <button type="submit" id="email_continue_btn" className="btn sub-btn text-left">Continue</button>
                                    </div>
                                </form>
                                {PopupType == 'login'?<span className="or">or Log In with</span>:""}
                                
                            </div>
                            {PopupType == 'login'?
                            <div className="social-login">
                                <a href="#" className="fblog"><div className="icon"><img src={fbicon} className="img-fluid" /></div>Log In with Facebook</a>
                                <a href="#" className="glog" id="glog"><div className="icon"><img src={googleicon} className="img-fluid" /></div>Log In with Google</a>
                            </div>:""}
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
import React, {useState, useEffect, useContext, useRef} from "react";
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import './popup.css';
import {user, lock} from '../../icons/svg-icons';
import accounticon from '../../images/regicon.png';
import phoneicon from '../../images/regphone.png';
import fbicon from '../../images/fblog.png';
import googleicon from '../../images/google.png';
import {LoginRegisterContext} from '../../components/contaxt/loginContext';
import OTPInput from "react-otp-input";
import { countryArr } from "../../data";

const Popup = (props) =>{
    const {popupType} = useContext(LoginRegisterContext);
    const[PopupType, setPopType ] = useState(popupType);
    const [creatingAccount, setCreatingAccount] = useState(PopupType);
    const [btntext, setbtntext] = useState(PopupType);
    const [titletext, setitletext] = useState(PopupType);
    const [OTPvalue, setOTPvalue] = useState("");
    const OtpButton = useRef(null);
    const [activeOTPClass, setActiveOTPClass] = useState(false);
    const [activePhoneClass, setActivePhoneClass] = useState(false);
    const [activeFormClass, setActiveFormClass] = useState(false);
    const [countryCode, setcountryCode] = useState(false);
    const [hidediv, sethidediv] = useState(false);
    

    const [inputField , setInputField] = useState({
        "login": null,
        "name": null,
        "email": null,
        "phoneNo": null,
        "message": null,
        "city" : null,
    });

    useEffect(() => {
      setCreatingAccount(PopupType == "login"? "New To Blox?": "Already have an Account?")
      setbtntext(PopupType == "login"? "Create an account": "Login")
      setitletext(PopupType == "login"? "Login": "Register")
      setcountryCode('91')
    });

    const togglePropType = (type) => {
        setPopType(type)
        setCreatingAccount(PopupType == "login"? "New To Blox?": "Already have an Account?")
        setbtntext(PopupType == "login"? "Create an account": "Login")
        setitletext(PopupType == "login"? "Login": "Register")
    };

    const inputsHandler = (e) =>{
        setInputField( {...inputField,  [e.target.name]: e.target.value} )
    }

    const setCountryCode = (num, country) =>{
        setcountryCode(country.dialCode)
    }

    useEffect(()=>{
        setInputField( {...inputField,  countryCode: countryCode})
    }, [countryCode])


    useEffect(()=>{
        if(OTPvalue.length === 4){
            OtpButton.current.focus();
        }
    },[OTPvalue])

    const handallogin = async (e) => {
        console.log(activeOTPClass)
        setActiveOTPClass(!activeOTPClass)
        sethidediv(!hidediv)
    }

    const handalsignup = async (e) => {
        setActivePhoneClass(true)
        sethidediv(!hidediv)
    }

    const handalphone = async (e) => {
        setActiveOTPClass(true)
        setActivePhoneClass(false)
    }

    const handalregfinal = async (e) => {
        e.preventDefault();
    }

    const handalloginotp = async (e) => {
        console.log(OTPvalue)
    }

    const handalsignupotp = async (e) => {
        setActiveFormClass(true)
        setActiveOTPClass(false)
        console.log(OTPvalue)
    }
   

    
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
                    {hidediv ?'' :
                        <div className="login">
                            <div className={`account-form ${PopupType == 'login'?'':'border-bottom-0'}`}>
                                <div className="title">{titletext} to Continue</div>
                                <div className="aficon mt-4 mb-4">
                                    <img src={accounticon} alt="Register" className="img-fluid" />
                                </div>
                                <form>
                                    {PopupType == 'login'?
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend p-0">
                                            <div className="flagIn">
                                                <IntlTelInput defaultCountry={'in'} onlyCountries={countryArr} separateDialCode={true} preferredCountries={[]} useMobileFullscreenDropdown={true} onSelectFlag={(num, country) => {setCountryCode(num, country)}}/>
                                                <input type="hidden" className="form-control country_code" name="country_code" onChange={inputsHandler} value={inputField.countryCode}/>
                                            </div>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Email/Phone" onChange={inputsHandler} value={inputField.login}/>
                                    </div>
                                    :
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <div className="inputIcon">
                                                <i className="la la-envelope"></i>
                                            </div>
                                        </div>
                                        <input type="email" className="form-control" placeholder="Email" onChange={inputsHandler} value={inputField.email}/>
                                    </div>
                                     
                                    }
                                    <div className="btn-sec">
                                        <button type="button" className="btn sub-btn text-left" onClick={PopupType == 'login'? ()=>handallogin() : ()=>handalsignup()}>Continue</button>
                                    </div>
                                </form>
                                {PopupType == 'login'?<span className="or">or Log In with</span>:""}
                                
                            </div>
                            {PopupType == 'login'?
                            <div className="social-login">
                                <span href="#" className="fblog"><div className="icon"><img src={fbicon} className="img-fluid" /></div>Log In with Facebook</span>
                                <span href="#" className="glog"><div className="icon"><img src={googleicon} className="img-fluid" /></div>Log In with Google</span>
                            </div>:""}
                        </div>
                        }
                        {PopupType == 'login'?"":
                        <>
                            {activePhoneClass ?
                            <div className={`regphone`}>
                                <div className="account-form border-bottom-0">
                                    <div className="title">Register to continue</div>
                                    <div className="aficon mt-4 mb-4">
                                        <img src={phoneicon} alt="Register" className="img-fluid" />
                                    </div>
                                    <form>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend p-0">
                                                <div className="flagIn">
                                                    <IntlTelInput defaultCountry={'in'} onlyCountries={countryArr} separateDialCode={true} preferredCountries={[]} useMobileFullscreenDropdown={true} onSelectFlag={(num, country) => {setCountryCode(num, country)}}/>
                                                    <input type="hidden" className="form-control country_code" name="country_code" onChange={inputsHandler} value={inputField.countryCode}/>
                                                </div>
                                            </div>
                                            <input type="tel" className="form-control" placeholder="Phone No" onChange={inputsHandler} value={inputField.phoneNo}/>
                                        </div>
                                        <div className="btn-sec">
                                            <button type="button" className="btn sub-btn text-left" onClick={handalphone}>Continue</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            : ""}
                            {activeFormClass ?
                            <div className={`regphone`}>
                                <div className="account-form border-bottom-0">
                                    <div className="title">Come in, the house is yours</div>
                                    <form>
                                        <div className="mb-3">
                                            <input type="text" className="form-control" placeholder="Name" onChange={inputsHandler} value={inputField.name}/>
                                        </div>
                                        <div className="mb-3">
                                            <input type="email" className="form-control" placeholder="Email Id"  value={inputField.email}/>
                                        </div>
                                        <div className="mb-3">
                                            <input type="text" className="form-control" placeholder="Phone No"  value={inputField.phoneNo}/>
                                        </div>
                                        <div className="mb-3">
                                            <input type="text" className="form-control" placeholder="Search for city" onChange={inputsHandler} value={inputField.city}/>
                                        </div>
                                        <div className="btn-sec">
                                            <button type="button" className="btn sub-btn text-left" onClick={handalregfinal}>Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            : ""}
                        </>
                        }
                        {activeOTPClass ?
                        <div className={`lrotp`}>
                            <div className="account-form border-bottom-0">
                                <div className="title">Verify <span className="sub"></span></div>
                                <div className="aficon mt-4 mb-4">
                                    <img src={phoneicon} alt="Register" className="img-fluid" />
                                </div>
                                <form>
                                    <div className="otp-lr">
                                        <OTPInput value={OTPvalue} onChange={setOTPvalue} OTPLength={4} isInputNum={true} disabled={false} inputStyle={{
                                            border: "1px solid #f2f0ef",
                                            width: "50px",
                                            height: "50px",
                                            radius: "0px",
                                            margin: "10px",
                                            fontSize: "20px",
                                            background: "#f2f0ef"
                                        }}/>
                                        <div className="cnotp">
                                            <div>
                                                <p className="otp-valid">Resend OTP in <span></span></p>
                                                <p className="not-recive"><span className="resend_otp">Resend OTP</span></p>
                                            </div>
                                            <div>
                                                <p><span className="goback">{PopupType == 'login'?"Go Back":"Change Number"}</span></p>
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <button type="button" ref={OtpButton} className="btn sub-btn text-left" disabled={OTPvalue.length !== 4} onClick={PopupType == 'login'? ()=>handalloginotp() : ()=>handalsignupotp()}><span>verify</span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        : ""}
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Popup;
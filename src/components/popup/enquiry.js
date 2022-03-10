import React, { useState, useEffect, useRef } from "react";
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import './popup.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { serverDate, schedule_timeArr,countryArr } from "../../data";
import { Navigation } from "swiper";
import OTPInput from "react-otp-input";

const EnquiryPopup = (props) =>{
    const [PopupType] = useState(props.type);
    const [titletext, setTitle] = useState(PopupType);
    const [isChecked, setIsChecked] = useState(false);
    const [EmailOTPvalue, setEmailOTPvalue] = useState("");
    const [PhoneOTPvalue, setPhoneOTPvalue] = useState("");
    const phoneOtpButton = useRef(null);
    const emailOtpButton = useRef(null);

    const [activeClass, setActiveClass] = useState(false);
    const [newDays, setNewDays] = useState({
        "allDays": null,
        "active-day": null
    });
    const [newTime, setnewTime] = useState({
        "alltimes": null,
        "active-time": null
    });
    const [countryCode, setcountryCode] = useState(false);

    const handleCheck = () => {
        setIsChecked(!isChecked);
    }

   

    const [inputField , setInputField] = useState({
        "name": null,
        "email": null,
        "phoneNo": null,
        "message": null,
        "visit_type": null,
        "ActivityDate": null,
        "ActivityTime":null,
    });


    var daysArr = [];
    var dArr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    var currentDate = new Date(serverDate);
    var incdate = new Date(currentDate.setDate(currentDate.getDate()));
    daysArr.push({
        fullDate: incdate.toLocaleDateString('en-GB').split('/').reverse().join('-'),
        date: incdate.getDate(),
        day: dArr[incdate.getDay()]
    })
    for (let index = 1; index < 10; index++) {
        currentDate = new Date(serverDate);
        incdate = new Date(currentDate.setDate(currentDate.getDate() + index));
        daysArr.push({
            fullDate: incdate.toLocaleDateString('en-GB').split('/').reverse().join('-'),
            date: incdate.getDate(),
            day: dArr[incdate.getDay()]
        })
    }


    function tConvert (time) {
        time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
        if (time.length > 1) {
          time = time.slice (1); 
          time[0] = +time[0] % 12 || 12;
          let sHours = time[0].toString();
          if(sHours.length == 1){
            time[0]='0'+time[0];
          }
        }
        return time.join ('');
    }

    var timeArr = [];
    schedule_timeArr.forEach(element => {
        var hour = element.substring(0,2);
        timeArr.push({
            fullTime: element,
            hours: tConvert(element).substring(0,5),
            ampm : (hour >= 12) ? "PM" : "AM",
        })
    })

    const checkTime = (selDate) => {
        var seldate = selDate;
        var newdate = new Date(serverDate);
        var cuDate = newdate.toLocaleDateString('en-GB').split('/').reverse().join('-');
        var ctime = newdate.getHours() + ":" + newdate.getMinutes() + ":" + newdate.getSeconds();
        var sliderTime = "";
        var z = 0;
        if (seldate === cuDate) {
            document.querySelectorAll('.timelist').forEach((element) => {
            sliderTime = element.getAttribute('data-time');
            if (sliderTime < ctime) {
                element.classList.add('disableitem');
              z = 1;
            }
          });
        } else {
        document.querySelectorAll('.timelist').forEach((element) => {
            element.classList.remove('disableitem');
          });
        }
    }

    useEffect(() => {
        setTitle(PopupType == "contact-rm"? "Contact our Real Estate Experts": "Book Visit Now") 
        setNewDays({
            ...newDays, "allDays": daysArr
        })
        setnewTime({
            ...newTime, "alltimes": timeArr
        })
        setcountryCode('91')
    },[]);
    
    const handleActiveDate = (index) =>{
        setNewDays({
            ...newDays, "active-day": newDays.allDays[index]
        })
    }

    const activeClassDate = (index) =>{
        if(newDays.allDays && newDays.allDays[index] === newDays["active-day"]){
            checkTime(newDays["active-day"].fullDate);
            return "active"
        }else{
            return ""
        }
    }

    const handleActiveTime = (index) =>{
        setnewTime({
            ...newTime, "active-time": newTime.alltimes[index]
        })
    }

    const activeClassTime = (index) =>{
        if(newTime.alltimes && newTime.alltimes[index] === newTime["active-time"]){
            return "active"
        }else{
            return ""
        }
    }

    const setCountryCode = (num, country) =>{
        setcountryCode(country.dialCode)
    }

    useEffect(()=>{
        setInputField( {...inputField,  countryCode: countryCode})
    }, [countryCode])

    useEffect(()=>{
        newDays["active-day"] && 
        setInputField( {...inputField,  ActivityDate: newDays["active-day"].fullDate})
    },[newDays]);

    useEffect(()=>{
        newTime["active-time"] && 
        setInputField( {...inputField,  ActivityTime: newTime["active-time"].fullTime})
    },[newTime]);
    

    const inputsHandler = (e) =>{
        setInputField( {...inputField,  [e.target.name]: e.target.value} )
    }
   

    useEffect(()=>{
        if(EmailOTPvalue.length === 4){
            emailOtpButton.current.focus();
        }
    },[EmailOTPvalue])

    useEffect(()=>{
        if(PhoneOTPvalue.length === 4){
            phoneOtpButton.current.focus();
        }
    },[PhoneOTPvalue])

    const handleSubmit = async (e) => {
        e.preventDefault();
        //const finalSubmit = fetch("API Url");
        console.log(inputField);
        setActiveClass('show')
    }

    const handleEmailOTPSubmit = async (e) => {
        e.preventDefault();
        //const finalSubmit = fetch("API Url");
        console.log(EmailOTPvalue);
    }

    const handlePhoneOTPSubmit = async (e) => {
        e.preventDefault();
        //const finalSubmit = fetch("API Url");
        console.log(PhoneOTPvalue);
    }

    return(
        <>
        <div className="popup-box enquery">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}><i className="la la-times"></i></span>
                <div className="popinner">
                    <div className={`popleft ${activeClass ? "" : "show"}`}>
                    <div className="bdow">
                        <div className="title"><em className="icon-download"><i className={`la ${PopupType == 'contact-rm'?'la-file-contract':'la-handshake'}`}></i></em>{titletext}</div>
                        {PopupType == 'contact-rm'?
                        <ul>
                            <li>Project Overview</li>
                            <li>Floor Plans</li>
                            <li>Master Plans Layout</li>
                            <li>Location Details</li>
                        </ul>
                        :
                        <p>Blox is a revolutionary homebuying platform, one of its kind in India. Ever thought you could buy a home in less than 10 clicks? Well, Blox has made the unthinkable a reality. We will find you your dream property you can call home without worrying about paperwork, financing and anything in between. Our Blox experts will take you for site visits and look after you well.</p>
                        }
                    </div>
                    </div>
                    <div className="popright">
                         <div className={`enqRight ${activeClass ? "" : "show"}`}>
                             <div className="title">Please Submit details to continue</div>
                             <form>
                                <div className="mb-2">
                                    <input type="text" className="form-control" id="name" name="name"  placeholder="Name*" onChange={inputsHandler} value={inputField.name}/>
                                </div>
                                <div className="mb-2">
                                    <input type="email" className="form-control" id="email" name="email"  placeholder="Email ID*"  onChange={inputsHandler} value={inputField.email}/>
                                </div>
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend p-0">
                                        <div className="flagIn">
                                            <IntlTelInput defaultCountry={'in'} onlyCountries={countryArr} separateDialCode={true} preferredCountries={[]} useMobileFullscreenDropdown={true} onSelectFlag={(num, country) => {setCountryCode(num, country)}}/>
                                            <input type="hidden" className="form-control country_code" name="country_code" onChange={inputsHandler} value={inputField.countryCode}/>
                                        </div>
                                    </div>
                                    <input type="text" className="form-control" id="phoneNo" name="phoneNo" placeholder="Phone No"  onChange={inputsHandler} value={inputField.phoneNo}/>
                                </div>
                                {PopupType == 'contact-rm'?
                                    <div className="mb-2">
                                        <textarea type="text" className="form-control" id="message" name="message"  placeholder="Message*"  onChange={inputsHandler} value={inputField.message}/>
                                    </div>
                                :
                                <>
                                    <div className="col-12 mb-2">
                                        <div className="d-flex">
                                            <div className="myradio">
                                                <input type="radio" onChange={inputsHandler} name="visit_type" value={1} id="pv" className="myradio__input"/>
                                                <label for="pv" className="myradio__label">Physical Visit</label>
                                            </div>
                                            <div className="myradio">
                                                <input type="radio" onChange={inputsHandler} name="visit_type" value={2} id="vs" className="myradio__input" />
                                                <label for="vs" className="myradio__label">Virtual Visit</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <input type="hidden" name="ActivityDate" id="ActivityDate" value={newDays["active-day"] && newDays["active-day"].fullDate} />
                                        <div className="formSlider">
                                            <Swiper
                                                modules={[Navigation]}
                                                navigation={{
                                                    nextEl: '.nextDay',
                                                    prevEl: '.prevDay',
                                                }}
                                                loop={false}
                                                slidesPerView={7}
                                                spaceBetween={0}
                                                className="daySlider"
                                            >
                                                {daysArr.map((perday, index)=>
                                                    <SwiperSlide key={index}>
                                                        <div className="item">
                                                            <div className={`datelist list ${activeClassDate(index)}`} onClick={()=>handleActiveDate(index)} data-date={perday.fullDate}>{perday.day}<span>{perday.date}</span></div>
                                                        </div>
                                                    </SwiperSlide>
                                                )}
                                                <div className="slideButton">
                                                    <div className="prevDay">
                                                        <i className="la la-angle-left"></i>
                                                    </div>
                                                    <div className="nextDay">
                                                        <i className="la la-angle-right"></i>
                                                    </div>
                                                </div>
                                            </Swiper>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <input type="hidden" name="ActivityTime" id="ActivityTime" value={newTime["active-time"] && newTime["active-time"].fullTime} />
                                        <div className="formSlider">
                                            <Swiper
                                                modules={[Navigation]}
                                                navigation={{
                                                    nextEl: '.nextDay',
                                                    prevEl: '.prevDay',
                                                }}
                                                loop={false}
                                                slidesPerView={7}
                                                spaceBetween={0}
                                                className="daySlider"
                                            >
                                                {timeArr.map((time, index)=>
                                                    <SwiperSlide key={index}>
                                                        <div className="item">
                                                            <div className={`timelist list ${activeClassTime(index)}`} onClick={() => handleActiveTime(index)} data-time={time.fullTime}>{time.hours}<span>{time.ampm}</span></div>
                                                        </div>
                                                    </SwiperSlide>
                                                )}
                                                <div className="slideButton">
                                                    <div className="prevDay">
                                                        <i className="la la-angle-left"></i>
                                                    </div>
                                                    <div className="nextDay">
                                                        <i className="la la-angle-right"></i>
                                                    </div>
                                                </div>
                                            </Swiper>
                                        </div>
                                    </div>
                                </>
                                }
                                <div className="mb-3">
                                    <div className="checkbox">
                                        <input type="checkbox" id="contacted" value="" onChange={handleCheck} checked={isChecked}/>
                                        <label for="contacted">I agree to be contacted by Blox</label>
                                    </div>
                                </div>
                                
                                <div>
                                    <button type="button" className={`btn sub-btn ${PopupType == 'contact-rm'?'enquiry':'visitschude'}`} disabled={isChecked? '' : 'disabled'} onClick={handleSubmit}>Submit</button>
                                </div>
                             </form>
                         </div>
                         <div className={`otpSec ${activeClass ? "show" : ""}`}>
                            <div className="otpbox" id="emailOtp"> 
                                <div className="subtitle">Verify Your Email</div>
                                <span className="sub">enter 4 digit otp</span>
                                <div className="otp-div">
                                    <OTPInput value={EmailOTPvalue} onChange={setEmailOTPvalue} OTPLength={4} isInputNum={true} disabled={false} inputStyle={{
                                        border: "1px solid #ced4da",
                                        width: "50px",
                                        height: "50px",
                                        radius: "0px",
                                        marginRight: "3px",
                                        fontSize: "20px"
                                    }}/>
                                    <div className="mt-3">
                                        <button type="submit" ref={emailOtpButton} className="btn sub-btn text-left verify-btn" disabled={EmailOTPvalue.length !== 4} onClick={handleEmailOTPSubmit}><span>verify email</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="otpbox" id="phoneOtp"> 
                                <div className="subtitle">Verify Your Phone Number</div>
                                <span className="sub">enter 4 digit otp</span>
                                <div className="otp-div">
                                    <OTPInput value={PhoneOTPvalue} onChange={setPhoneOTPvalue} OTPLength={4} isInputNum={true} disabled={false} inputStyle={{
                                        border: "1px solid #ced4da",
                                        width: "50px",
                                        height: "50px",
                                        radius: "0px",
                                        marginRight: "3px",
                                        fontSize: "20px"
                                    }}/>
                                    <div className="mt-3">
                                        <button type="submit" ref={phoneOtpButton} className="btn sub-btn text-left verify-btn" disabled={PhoneOTPvalue.length !== 4} onClick={handlePhoneOTPSubmit}><span>verify phone</span>
                                        </button>
                                    </div>
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
export default EnquiryPopup;
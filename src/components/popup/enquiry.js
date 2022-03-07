import React, { useState, useEffect, useContext } from "react";
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import './popup.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { serverDate, schedule_timeArr } from "../../data";
import { Navigation } from "swiper";
import Datelistitem from "./datelistitem";
import Timelistitem from './timelistitem';
import { CheckTimeContext } from "../contaxt/checktime";
const EnquiryPopup = (props) =>{
    const {selDate} = useContext(CheckTimeContext);
    const [PopupType] = useState(props.type);
    const [titletext, setTitle] = useState(PopupType);
    const [isChecked, setIsChecked] = useState(false);

    const handleCheck = () => {
        setIsChecked(!isChecked);
    }
    if(PopupType != "contact-rm"){
        console.log(selDate);
    }

    

    useEffect(() => {
        setTitle(PopupType == "contact-rm"? "Contact our Real Estate Experts": "Book Visit Now") 
    });

    var daysArr = [];
    var dArr = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    var currentDate = new Date(serverDate);
    var incdate = new Date(currentDate.setDate(currentDate.getDate()));
    daysArr.push({
        fullDate: incdate.toLocaleDateString('en-GB'),
        date: incdate.getDate(),
        day: dArr[incdate.getDay()]
    })
    for (let index = 1; index < 10; index++) {
        currentDate = new Date(serverDate);
        incdate = new Date(currentDate.setDate(currentDate.getDate() + index));
        daysArr.push({
            fullDate: incdate.toLocaleDateString('en-GB'),
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

    function checkTime(selDate) {
        var seldate = selDate;
        var newdate = new Date(serverDate);
        var cuDate = newdate.toLocaleDateString('en-GB').split('/').reverse().join('-');
        var ctime = newdate.getHours() + ":" + newdate.getMinutes() + ":" + newdate.getSeconds();
        var sliderTime = "";
        var z = 0;
        if (seldate == cuDate) {
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
    

    return(
        <>
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}><i className="la la-times"></i></span>
                <div className="popinner">
                    <div className="popleft">
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
                         <div className="enqRight">
                             <div className="title">Please Submit details to continue</div>
                             <form>
                                <div className="mb-2">
                                    <input type="text" className="form-control" id="name" name="name"  placeholder="Name*"/>
                                </div>
                                <div className="mb-2">
                                    <input type="email" className="form-control" id="email" name="email"  placeholder="Email ID*"/>
                                </div>
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend p-0">
                                        <div className="flagIn">
                                            <IntlTelInput defaultCountry={'in'} onlyCountries={["AF","AL","DZ","AS","AD","AO","AQ","AG","AR","AM","AW","AU","AZ","BS","BH","BD","BY","BE","BZ","BJ","BM","BT","BO","BA","BW","BV","IO","BN","BG","BI","KH","CM","CV","CF","TD","CX","CC","KM","CG","CD","CK","CR","CI","HR","CU","DK","DJ","DM","EG","GQ","ER","ET","FK","FO","FJ","FI","FR","GF","PF","TF","GA","GM","GE","DE","GH","GI","GR","GL","GP","GU","GN","GW","GY","HT","HM","VA","HN","HK","HU","IS","IN","IR","IQ","IE","IT","JO","KZ","KI","KP","KR","KW","KG","LA","LV","LB","LS","LR","LY","LI","LU","MO","MK","MG","MW","MV","ML","MT","MH","MQ","MR","MU","YT","MX","FM","MD","MC","MN","MS","MA","MZ","MM","NA","NR","NP","NL","AN","NC","NI","NE","NG","NU","NF","MP","NO","OM","PK","PW","PS","PA","PG","PY","PN","PL","PT","QA","RE","RO","RU","RW","SH","KN","LC","PM","VC","WS","SM","ST","SA","SN","CS","SC","SL","SG","SK","SI","SB","SO","ZA","GS","LK","SD","SR","SJ","SZ","CH","SY","TW","TJ","TZ","TH","TL","TG","TK","TO","TN","TR","TM","TC","TV","UG","UA","AE","GB","US","UY","UZ","VU","VE","VG","VI","WF","EH","YE","ZM","ZW"]} separateDialCode={true} preferredCountries={[]} useMobileFullscreenDropdown={true}/>
                                            <input type="hidden" className="form-control country_code" name="country_code" id="floatingSelect" />
                                        </div>
                                    </div>
                                    <input type="text" className="form-control" id="lemail" placeholder="Phone No" />
                                </div>
                                {PopupType == 'contact-rm'?
                                    <div className="mb-2">
                                        <textarea type="text" className="form-control" id="message" name="message"  placeholder="Message*" />
                                    </div>
                                :
                                <>
                                    <div className="col-12 mb-2">
                                        <div className="d-flex">
                                            <div className="myradio">
                                                <input type="radio" name="visit_type" value="1" id="pv" className="myradio__input"/>
                                                <label for="pv" className="myradio__label">Physical Visit</label>
                                            </div>
                                            <div className="myradio">
                                                <input type="radio" name="visit_type" value="2" id="vs" className="myradio__input" />
                                                <label for="vs" className="myradio__label">Virtual Visit</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <input type="hidden" name="ActivityDate" id="ActivityDate" value="" />
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
                                                            <Datelistitem id={index} fullDate={perday.fullDate} day={perday.day} date={perday.date}/>
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
                                        <input type="hidden" name="ActivityTime" id="ActivityTime" value="" />
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
                                                            <Timelistitem id={index} hours={time.hours} ampm={time.ampm} fullTime={time.fullTime}/>
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
                                    <button type="button" className={`btn sub-btn ${PopupType == 'contact-rm'?'enquiry':'visitschude'}`} disabled={isChecked? '' : 'disabled'}>Submit</button>
                                </div>
                             </form>
                         </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default EnquiryPopup;
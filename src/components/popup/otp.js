import React from "react";

const OtpPopup = ({email, phone}) =>{
    return(
        <>
            <div className="otpbox" id={`${email ?'emailOtp':'phoneOtp'}`}> 
                <div class="subtitle">Verify Your {email ?'Email':'Phone'}</div>
                <span class="sub">enter 4 digit otp</span>
                <div class="otp-event">
                    <input className="otp" type="number"  id="" autocomplete="off" />
                    <input className="otp" type="number"  id="" autocomplete="off" />
                    <input className="otp" type="number"  id="" autocomplete="off" />
                    <input className="otp" type="number"  id="" autocomplete="off" />
                </div>
                <div class="mt-3">
                    <button type="submit" id="otp_verify_btn" className="btn sub-btn text-left verify-btn" disabled><span>verify {email ?'email':'phone'}</span>
                    </button>
                </div>
            </div>
        </>
    )
}
export default OtpPopup;
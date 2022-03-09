import React , {useState, useRef, useEffect}from "react";
import OTPInput, { ResendOTP } from "otp-input-react";

const OtpPopup = ({email, phone}) =>{
    const [OTPvalue, setOTPvalue] = useState("");
    const submitButton = useRef(null);
    useEffect(()=>{
        if(OTPvalue.length === 4){
            submitButton.current.focus();
        }
    })
    

    return(
        <>
            <OTPInput value={OTPvalue} onChange={setOTPvalue} autoFocus OTPLength={4} otpType="number" disabled={false} className="otp-div" 
            inputStyles={{
                border: "1px solid #ced4da",
                width: "50px",
                height: "50px",
                radius: "0px",
                marginRight: "3px",
                fontSize: "20px"
            }}/>
            <div class="mt-3">
                <button type="submit" ref={submitButton} className="btn sub-btn text-left verify-btn" disabled={OTPvalue.length !== 4}><span>verify</span>
                </button>
                {/* {console.log(handleOtp())} */}
            </div>
        
        </>
    )
}
export default OtpPopup;
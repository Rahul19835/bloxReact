import React, {useState} from "react";

export const LoginRegisterContext = React.createContext();

export const LoginRegisterProvider = ({children}) => {

    const [loginState, setPopUp] = useState(false);
    const [popupType, setPopupType] = useState();

    const togglePopup = (type) => {
        setPopupType(type);
        setPopUp(!loginState);
    }
    
    
    return(
        <LoginRegisterContext.Provider value={{loginState, setPopUp, popupType, setPopupType, togglePopup}} >
            {children}
        </LoginRegisterContext.Provider>
    )
}


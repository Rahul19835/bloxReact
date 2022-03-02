import React, {useState} from "react";

export const EnquiryContext = React.createContext();

export const EnquaryProvider = ({children}) => {
    const [popupState, setEnq] = useState(false);
    const [enqType, setPopupType] = useState();

    const togglePopup = (type) => {
        setPopupType(type);
        setEnq(!popupState);
    }
    return(
        <EnquiryContext.Provider value={{popupState, setEnq, enqType, setPopupType, togglePopup}} >
            {children}
        </EnquiryContext.Provider>
    )
}


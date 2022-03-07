import React, {useState} from "react";

export const CheckTimeContext = React.createContext();

export const CheckTimeProvider = ({children}) => {
    const [selDate, setDate] = useState(false);

    return(
        <CheckTimeContext.Provider value={{selDate, setDate}} >
            {children}
        </CheckTimeContext.Provider>
    )
}


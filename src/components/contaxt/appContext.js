import React from "react";
import {EnquaryProvider} from './enquiry';
import {LoginRegisterProvider} from './loginContext';
import {CheckTimeProvider} from "./checktime";

const AppContext = ({children}) => {
    return(
        <>
        <EnquaryProvider>
            <LoginRegisterProvider>
                <CheckTimeProvider>
                    {children}
                </CheckTimeProvider>
            </LoginRegisterProvider>
        </EnquaryProvider>
        </>
    )
}
export default AppContext;

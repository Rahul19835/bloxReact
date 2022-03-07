import React from "react";
import {EnquaryProvider} from './enquiry';
import {LoginRegisterProvider} from './loginContext';

const AppContext = ({children}) => {
    return(
        <>
        <EnquaryProvider>
            <LoginRegisterProvider>
                    {children}
            </LoginRegisterProvider>
        </EnquaryProvider>
        </>
    )
}
export default AppContext;

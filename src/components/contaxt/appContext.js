import React from "react";
import {EnquaryProvider} from './enquiry';
import {LoginRegisterProvider} from './loginContext';
import {FilterProvider} from "./filterContext";
import {MapProvider} from "./maps";

const AppContext = ({children}) => {
    return(
        <>
        <EnquaryProvider>
            <LoginRegisterProvider>
                <FilterProvider>
                    <MapProvider>
                        {children}
                    </MapProvider>
                </FilterProvider>
            </LoginRegisterProvider>
        </EnquaryProvider>
        </>
    )
}
export default AppContext;

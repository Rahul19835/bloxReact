import React, {useState} from "react";

export const MapContext = React.createContext();

export const MapProvider = ({children}) => {

    const [selected, setSelected] = useState({"hello": "hello"});

    const setCardMarkerHover = location => {
        setSelected(location);
    };

    const resetCardMarkerHover = () => {
        setSelected('')
    };

    const onSelect = item => {
        setSelected(item);
    }

    return(
        <MapContext.Provider value={{setCardMarkerHover, resetCardMarkerHover, selected, setSelected, onSelect}} >
            {children}
        </MapContext.Provider>
    )
}


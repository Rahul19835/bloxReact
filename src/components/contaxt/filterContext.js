import React, {useState} from "react";

export const FilterContext = React.createContext();

export const FilterProvider = ({children}) => {

    const [filter, setFilter] = useState({
        "propertyType": {
            "selected" : null,
            "all": ["residential", "commercial"]
        },
        "bhkType" : {
            "selected" : [],
            "all": [
                {
                    "type": "1 Bhk",
                    "data-id": 1
                },
                {
                    "type": "2 Bhk",
                    "data-id": 2
                },
                {
                    "type": "3 Bhk",
                    "data-id": 3
                },
                {
                    "type": "4 Bhk",
                    "data-id": 4
                },
                {
                    "type": "5 Bhk",
                    "data-id": 5
                },
            ]
        },
        "priceRange" : {
            "selectedMin" : null,
            "selectedMax" : null,
            "min" : [
                {
                    "type": "10 Lacs",
                    "value" : 1000000
                },
                {
                    "type": "25 Lacs",
                    "value" : 2500000
                },
                {
                    "type": "50 Lacs",
                    "value" : 5000000
                },

            ],
            "max" : [
                {
                    "type": "10 Lacs",
                    "value" : 1000000
                },
                {
                    "type": "25 Lacs",
                    "value" : 2500000
                },
                {
                    "type": "50 Lacs",
                    "value" : 5000000
                },

            ],
        },
        "possessionStatus" : {
            "selected" : [],
            "all" : [
                {
                    "type": "Launch",
                    "data-id": 1
                },
                {
                    "type": "Pre Launch",
                    "data-id": 2
                },
                {
                    "type": "Ready to move in",
                    "data-id": 3
                },
                {
                    "type": "Under Construction",
                    "data-id": 4
                },
            ]
        },
        "area" : {
            "selected" : [],
            "all" : [
                {
                    "type": "< 500 sq. Ft.",
                    "value" : 500
                },
                {
                    "type": "500 - 1000 sq. Ft.",
                    "value" : 500_1000
                },
                {
                    "type": "1000 - 2000 sq. Ft.",
                    "value" : 1000_2000
                },
                {
                    "type": "2000+ sq. Ft.",
                    "value" : 2000_0
                },

            ],
        },
        "bathroom" : {
            "selected" : null,
            "all" : [
                {
                    "type": "1+",
                    "value" : 1
                },
                {
                    "type": "2+",
                    "value" : 2
                },
                {
                    "type": "3+",
                    "value" : 3
                },
                {
                    "type": "4+",
                    "value" : 4
                },

            ],
        },
        "amenities" : {
            "selected" : null,
            "all" : [
                {
                    "type": "AC Waiting Lobby",
                    "value" : 1,
                    "iconName" : 'ac-waiting-lobby'
                },
                {
                    "type": "Badminton Court(s)",
                    "value" : 2,
                    "iconName" : 'badminton-court'
                },
                {
                    "type": "Indoor Games",
                    "value" : 3,
                    "iconName" : 'indoor-games'
                },
                {
                    "type": "Party Hall",
                    "value" : 4,
                    "iconName" : 'party-hall'
                },

            ],
        }
    })

    return(
        <FilterContext.Provider value={{filter, setFilter}}>
            {children}
        </FilterContext.Provider>
    )
}


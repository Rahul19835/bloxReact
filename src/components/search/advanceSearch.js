import React, { useContext, useState } from "react";
import {FilterContext} from '../../components/contaxt/filterContext';
const Advancesearch = (props) => {

    const {filter, setFilter} = useContext(FilterContext);
    const [proDropdown, setProDropdown] = useState(false)
    const [bhkDropdown, setBhkDropdown] = useState(false)
    const [possessionStatus, setpossessionStatus] = useState(false)
    const [area, setarea] = useState(false)
    const [prizeRange, setprizeRange] = useState(false)
    const [isActive, setisActive] = useState(false)

    const handleselectProperty = (index) => {
        setFilter({
            ...filter, "propertyType": {...filter.propertyType, "selected": filter.propertyType.all[index]}
        })
        //setisActive(!isActive)
    }
    const handleselectBhk = (index) => {
        if(filter.bhkType.selected.filter(type => type == filter.bhkType.all[index]).length === 0){
            setFilter({
                ...filter, "bhkType": {...filter.bhkType, "selected": [...filter.bhkType.selected,  filter.bhkType.all[index]]}
            })  
        }       
    }
    const handleselectPossession = (index) => {
        if(filter.possessionStatus.selected.filter(type => type == filter.possessionStatus.all[index]).length === 0){
            setFilter({
                ...filter, "possessionStatus": {...filter.possessionStatus, "selected": [...filter.possessionStatus.selected,  filter.possessionStatus.all[index]]}
            })  
        }   
    }
    const handleselectArea = (index) => {
        if(filter.area.selected.filter(type => type == filter.area.all[index]).length === 0){
            setFilter({
                ...filter, "area": {...filter.area, "selected": [...filter.area.selected,  filter.area.all[index]]}
            })  
        }   
    }
    const handleselectMinPrize = (index) => {
        setFilter({
            
        })
    }
    const handleselectMaxPrize = (index) => {
        setFilter({
            
        })
    }

    return(
        <>
            <div className="advance-filter">
                <div className="filtersDiv" onMouseEnter={()=>setProDropdown(!proDropdown)} onMouseLeave={()=>setProDropdown(!proDropdown)}>
                    <div className={`select-area  ${proDropdown ? "dropdownOpen" : ""}`}>
                        <span className="selectValue">{filter.propertyType.selected ? filter.propertyType.selected : "Propert Type"}</span>
                        <input type="hidden" />
                    </div>
                    {proDropdown && 
                    <div className="select-drop">
                        <ul>
                        {
                            filter.propertyType.all.map((propertyType, index)=>
                                <li className={isActive ? 'active' : ''} key={index} onClick ={()=>handleselectProperty(index)} value={propertyType}>{propertyType}</li>
                            )
                        }
                        </ul>
                    </div>
                    }
                </div>

                <div className="filtersDiv" onMouseEnter={()=>setBhkDropdown(!bhkDropdown)} onMouseLeave={()=>setBhkDropdown(!bhkDropdown)}>
                    <div className={`select-area  ${bhkDropdown ? "dropdownOpen" : ""}`}>
                        <span className="selectValue">{filter.bhkType.selected.length !== 0 ? filter.bhkType.selected.map((slType, index)=><span key={index}>{slType.type}</span>): "BHK Type"}</span>
                        <input type="hidden" />
                    </div>
                    {bhkDropdown && 
                    <div className="select-drop">
                        <ul>
                        {
                            filter.bhkType.all.map((bhkType, index)=>
                                <li key={index} onClick ={()=>handleselectBhk(index)} value={bhkType["data-id"]}>{bhkType.type}</li>
                            )
                        }
                        </ul>
                    </div>
                    }
                </div>

                <div className="filtersDiv" onMouseEnter={()=>setprizeRange(!prizeRange)} onMouseLeave={()=>setprizeRange(!prizeRange)}>
                    <div className={`select-area  ${prizeRange ? "dropdownOpen" : ""}`}>
                        <span className="selectValue">{filter.priceRange.selected ? filter.priceRange.selected.all : "Price Range"}</span>
                        <input type="hidden" />
                    </div>
                    {prizeRange && 
                    <div className="select-drop">
                        <div className="price-value">
                          <div className="pricebox">
                            <div className="pinput">
                              <input className="form-control price-label" placeholder="Min" data-dropdown-id="price-min" name="budgetmin"/>
                              <div id="price-min" className="price-range hide">
                                <ul>
                                    {
                                        filter.priceRange.min.map((priceRangeMin, index)=>
                                            <li key={index} onClick ={()=>handleselectMinPrize(index)} value={priceRangeMin["value"]}>{priceRangeMin.type}</li>
                                        )
                                    }
                                </ul>
                              </div>
                            </div>
                            <span> </span>
                            <div className="pinput">
                              <input className="form-control price-label" placeholder="Max" data-dropdown-id="price-max" name="budgetmax" />
                              <div id="price-max" className="price-range hide">
                                <ul>
                                    {
                                        filter.priceRange.max.map((priceRangeMax, index)=>
                                            <li key={index} onClick ={()=>handleselectMaxPrize(index)} value={priceRangeMax["value"]}>{priceRangeMax.type}</li>
                                        )
                                    }
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                       
                    </div>
                    }
                </div>

                <div className="filtersDiv" onMouseEnter={()=>setpossessionStatus(!possessionStatus)} onMouseLeave={()=>setpossessionStatus(!possessionStatus)}>
                    <div className={`select-area  ${possessionStatus ? "dropdownOpen" : ""}`}>
                        <span className="selectValue">{filter.possessionStatus.selected.length !== 0 ? filter.possessionStatus.selected.map((possessionStatusType, index)=><span key={index}>{possessionStatusType.type}</span>): "Possession Status"}</span>
                        <input type="hidden" />
                    </div>
                    {possessionStatus && 
                    <div className="select-drop">
                        <ul>
                        {
                            filter.possessionStatus.all.map((possessionStatus, index)=>
                                <li key={index} onClick ={()=>handleselectPossession(index)} value={possessionStatus["data-id"]}>{possessionStatus.type}</li>
                            )
                        }
                        </ul>
                    </div>
                    }
                </div>

                <div className="filtersDiv" onMouseEnter={()=>setarea(!area)} onMouseLeave={()=>setarea(!area)}>
                    <div className={`select-area  ${area ? "dropdownOpen" : ""}`}>
                        <span className="selectValue">{filter.area.selected.length !== 0 ? filter.area.selected.map((areaType, index)=><span key={index}>{areaType.type}</span>): "Area sq. ft."}</span>
                        <input type="hidden" />
                    </div>
                    {area && 
                    <div className="select-drop">
                        <ul>
                        {
                            filter.area.all.map((area, index)=>
                                <li key={index} onClick ={()=>handleselectArea(index)} value={area["value"]}>{area.type}</li>
                            )
                        }
                        </ul>
                    </div>
                    }
                </div>

            </div>
        </>
    )
}
export default Advancesearch
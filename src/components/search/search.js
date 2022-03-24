import React,{useState,useContext} from "react";
import Advancesearch from "./advanceSearch";
import {Link} from "react-router-dom";
import {homesearch} from '../../icons/svg-icons';
import {FilterContext} from '../../components/contaxt/filterContext';
import "../../icons/icon/icon.css"
import './search.css';

const Search = (props) => {
    const {filter, setFilter} = useContext(FilterContext);
    const [isActive, setisActive] = useState(false)
    const showSidebar = () =>{
        console.log('clicked')
        setisActive(!isActive)
    }
    const removeSidebar = () =>{
        console.log('clicked')
        setisActive(!isActive)
    }
    return(
        <>
            <div className="list-search">
                <div className="input-group">
                    <div id="serlist">  
                        <input type="text" className="form-control" placeholder="Search for Locality, Landmark, Project, or Developer" autoComplete="off" id="searchbar" />
                        <ul id="searchlist"></ul>  
                    </div>
                    {props.home ?
                    <div className="input-group-append">
                        <Link to="/search" className="btn search-btn" type="button"> 
                            <i className="icon header-icon" dangerouslySetInnerHTML={{__html: homesearch}}></i><span>Search</span>
                        </Link>
                    </div>
                    : ""}
                </div>
            </div>
            {props.home ? "" : 
                <>
                    <Advancesearch />
                    <>
                    <div className="more-filter" onClick={()=>showSidebar()}>
                        <div className="moreFilter" title="More Filter"></div>
                    </div>
                    <div className={`backdrop ${isActive ? 'active' : ''}`} onClick={()=>removeSidebar()}></div>
                    <div className={`side_bar ${isActive ? 'active' : ''}`}>
                       
                        <div className="sideHead">
                            <div className="title"> More Filter </div>
                            <div className="close-btn" onClick={()=>removeSidebar()}></div>
                        </div>
                        <div className="side-content">
                            <div className="flist">
                                <ul>
                                    <li>
                                        <div className="fltitle">Bathroom</div>
                                        <div className="fl-data">
                                            {
                                                filter.bathroom.all.map((bathroom, index)=>
                                                <>
                                                    <input type="radio" name="bathroom" value={bathroom.value} id={`bathroom_${bathroom.value}`} />
                                                    <label for={`bathroom_${bathroom.value}`} key={index}>
                                                        <span>{bathroom.type}</span>
                                                    </label>
                                                </>
                                                )
                                            }
                                            
                                        </div>
                                    </li>
                                    <li>
                                        <div className="fltitle">Amenities</div>
                                        <div className="fl-data">
                                            {
                                                filter.amenities.all.map((amenities, index)=>
                                                <>
                                                    <input type="checkbox" name="amenities" value={amenities.value} id={`amenities_${amenities.value}`} />
                                                    <label for={`amenities_${amenities.value}`} key={index}>
                                                        <span>
                                                            <div>
                                                                <span className={`icons ${amenities.iconName}`}></span>
                                                            </div>
                                                            {amenities.type}
                                                        </span>
                                                    </label>
                                                </>
                                                )
                                            }
                                            
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="side-footer"> 
                           <span className="btn site-btn2 save-filter" onClick={()=>removeSidebar()}>save filter</span> 
                        </div>
                    </div>
                    </>
                    
                    <button type="button" name="" className="load-more search"><span>Search</span></button>
                    <span className="reset" title="Reset Filter"><i className="la la-redo-alt"></i></span>
                </>
            }
        </>
    )
}
export default Search;
import React from "react";
import {homesearch} from '../../icons/svg-icons';

const Search = (props) => {
    return(
        <>
            <div className="input-group">
                <div id="serlist">  
                    <input type="text" className="form-control" placeholder="Search for Locality, Landmark, Project, or Developer" autoComplete="off" id="searchbar" />
                    <ul id="searchlist"></ul>  
                </div>
                {props.home ?
                <div className="input-group-append">
                    <button className="btn search-btn" type="submit"> 
                        <i className="icon header-icon" dangerouslySetInnerHTML={{__html: homesearch}}></i><span>Search</span>
                    </button>
                </div>
                : ""}
            </div>
        </>
    )
}
export default Search;
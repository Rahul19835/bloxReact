import React from "react";
import Advancesearch from "./advanceSearch";
import {Link} from "react-router-dom";
import {homesearch} from '../../icons/svg-icons';

const Search = (props) => {
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
            {props.home ? "" :<Advancesearch />}

        </>
    )
}
export default Search;
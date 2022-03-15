import React, {useContext} from "react";
import './card.css';
import { Link } from "react-router-dom";
import {EnquiryContext} from '../contaxt/enquiry';
import Cardfooter from "./cardfooter";
import ReadMoreReadLess from "react-read-more-read-less";


const Card = (props) =>{
    const {togglePopup} = useContext(EnquiryContext);
   
    return(
        <>
            <div className="card">
                <div className="wishlist addinLocal" data-project_id={props.project_id} data-city_id={props.city_id} alt="Shortlist Project" id={`addProject${props.project_id}` }>
                    <i className="la la-heart-o"></i>
                </div>
                <div className="wishlist removefromLocal" data-project_id={props.project_id} data-city_id={props.city_id} alt="Shortlisted Project" id={`removeProject${props.project_id}` }>
                    <i className="la la-heart-o"></i>
                </div>
                <div className="pro-img">
                    <Link to={props.url}>
                    <img src={props.img} className="card-img-top"/>
                    </Link>
                    <div className="stam">
                        <ul>
                            {props.stamp.map((stamp, index)=> <li key={index}><span className="stamp_btn">{stamp}</span></li>)}
                        </ul>
                    </div>
                </div>
                <div className="card-body">
                    <div className="card-main">
                        <div className="card-title"><Link to={props.url}>{props.name}</Link></div>
                        <div className="card-text">{props.location}</div>
                        <div className="card-price">{props.price}</div>
                        <div className="ftypes">
                            <ul>
                                {props.flatTypes.map((faltType, index)=> <li key={index}>{faltType}</li>)}
                            </ul>
                        </div>
                        {props.page == "search" && 
                            <div className="pro-brif">
                                <ReadMoreReadLess charLimit={120} readMoreText={"show more"} readLessText={"show less"} readMoreClassName="show-more" readLessClassName="show-less">
                                    {props.pro_brif}
                                </ReadMoreReadLess>
                            </div>
                        }
                    </div>
                   {props.page !== "search" &&<Cardfooter project_id={props.project_id} togglePopup={togglePopup}/>}
                </div>
                {props.page == "search" && <Cardfooter project_id={props.project_id} togglePopup={togglePopup}/>}
            </div>
            
        </>
    )
}
export default Card; 

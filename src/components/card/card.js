import React from "react";
import './card.css';
import { Link } from "react-router-dom";

const Card = (props) =>{
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
                    </div>
                    <div className="card-footer">
                        <span className="btn site-btn2 contactrm" data-project_id={props.project_id}>Contact RM</span>
                        <span className="btn site-btn bookvisit" data-project_id={props.project_id}>Book Visit Now</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;

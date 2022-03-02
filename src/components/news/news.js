import React from "react";
import  './news.css';
import { Link } from "react-router-dom";

const News = (props) => {
    return(
        <div className="card">
            <Link to={props.url}>
            <div className="nimg">
                    <img className="card-img-top" src={props.img} alt={props.title} />
            </div>
            <div className="card-body">
                <div>
                    <div className="card-date">{props.date}</div>
                    <div className="card-title">{props.title}</div>
                    <div className="card-text"></div>
                 </div>
                <span className="rm">read more</span>
            </div>
            </Link>
        </div>
    )
}
export default News;
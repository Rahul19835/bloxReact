import React from "react";
import './developer.css';
import { Link } from "react-router-dom";

const Developer = (props) =>{
    return(
        <div className="devcard">
            <Link to={props.url}>
            <div className="dev-img">
                <img src={props.img} className="img-fluid"/>
            </div>
            <div className="dev-data">
                <div className="dev-top">
                    <div className="dev-logo">
                        <img src={props.logo} className="img-fluid"/>
                    </div>
                    <div className="dev-r">
                        <div>Year estd. <span>{props.year}</span></div>
                        <div>Projects <span>{props.projects}</span></div>
                    </div>
                </div>
                <div className="dev-bottom">
                    <div className="dev-title">{props.name}</div>
                    <p>{props.desc}</p>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default Developer;
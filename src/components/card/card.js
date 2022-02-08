import React from "react";

const Card = (props) =>{
    return(
        <>
            <div className="card">
                <div className="pro-img">
                    <img src={props.img} className="card-img-top"/>
                </div>
                <div className="card-body">
                    <div className="card-title">{props.name}</div>
                    <div className="card-text">{props.location}</div>
                    <div className="card-price">{props.price}</div>
                    <div className="ftypes">
                        <ul>
                            {props.flatTypes.map((faltType)=> <li>{faltType}</li>)}
                        </ul>
                    </div>
                </div>
                <div className="card-footer">
                    
                </div>
            </div>
        </>
    )
}
export default Card;
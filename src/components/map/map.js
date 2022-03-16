import React, {useEffect, useContext } from "react";
import mapMarker from '../../images/blox-medium.png';
import { Scrollbars } from 'react-custom-scrollbars';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { Link } from "react-router-dom";
import {locations} from '../../data';
import { execluveData as projectdata } from '../../data';
import {MapContext} from "../contaxt/maps";
import "./map.css";


const ProjectMap = ({ variant, type}) => {

    const {selected, setSelected, setCardMarkerHover, resetCardMarkerHover, onSelect} = useContext(MapContext);


    useEffect(()=>{
        setSelected('')
    },[type])

    const defaultCenter = {
        lat: 41.3851, lng: 2.1734
    }

    const mapStyles = () => {
        if (variant == 'home') {
            return {
                height: "400px",
                width: "100%"
            }
        } else {
            return {
                height: "100%",
                width: "100%"
            }
        }
    }


    return (
        <div className="licon-sec">
            {variant == 'home'? 
            <div className="lsec-left">
                <Scrollbars style={{ height: 400 }}>
                    <ul id="popular-list">
                        {locations.filter(location =>  location.type == type).map((popularlist, index) =>
                        <>
                            <li key={index} onMouseEnter={() => setCardMarkerHover(popularlist)} onMouseLeave={() => resetCardMarkerHover()}>
                                <Link to={popularlist.url}><span>{popularlist.name}</span><span>{popularlist.price}</span></Link>
                            </li>
                        </>
                        )}
                    </ul>
                </Scrollbars>
            </div>
            :""
            }
            <div className={variant == 'listing' ? 'listingmap': 'lsec-right'}>
                <div className="map" style={{ height:"100%" }}>
                    <LoadScript
                        googleMapsApiKey='AIzaSyDMBRr9IAiWpVRXb7Oo5RhNLC-rzQ5WGLU'>
                        <GoogleMap
                            mapContainerStyle={mapStyles()}
                            draggable={true}
                            zoom={12}
                            center={defaultCenter}
                            controlSize={26}
                            mapTypeControl={false}
                            clickableIcons={false}
                        >
                            {
                                <>
                                {variant == 'home' &&
                                <>
                                {
                                    locations ?
                                        locations.filter((location) =>  location.type == type).map((item, index) => {
                                            return (
                                                <>
                                                <Marker
                                                    key={index}
                                                    position={item.location}
                                                    onClick={() => onSelect(item)}
                                                    icon={mapMarker}
                                                />
                                                </>
                                            )
                                        }) : null
                                }
                                {
                                    selected.location ?
                                        (
                                            <InfoWindow
                                                position={selected.location}
                                            >
                                                <div className="mapProject">
                                                    <Link to={selected.url}>
                                                        <div className="mpImg">
                                                            <img src={selected.img} />
                                                        </div>
                                                        <div className="mpData">
                                                            <h3>{selected.name}</h3>
                                                            <p className="mpadd">{selected.address}</p>
                                                            <span className="mpprice">{selected.price}</span>
                                                        </div>
                                                        <p></p>
                                                    </Link>
                                                </div>
                                            </InfoWindow>
                                        ) : null
                                }
                                </>
                                }
                                </>
                            }
                            {
                                <>
                                {variant == 'listing' &&
                                <>
                                {
                                    projectdata ?
                                        projectdata.map((item, index) => {
                                            return (
                                                <>
                                                <Marker
                                                    key={index}
                                                    position={item.glocation}
                                                    onClick={() => onSelect(item)}
                                                    icon={mapMarker}
                                                />
                                                </>
                                            )
                                        }) : null
                                }
                                {
                                    selected.glocation ?
                                        (
                                            <InfoWindow
                                                position={selected.glocation}
                                            >
                                                <div className="mapProject">
                                                    <Link to={selected.url}>
                                                        <div className="mpImg">
                                                            <img src={selected.img} />
                                                        </div>
                                                        <div className="mpData">
                                                            <h3>{selected.name}</h3>
                                                            <p className="mpadd">{selected.location}</p>
                                                            <span className="mpprice">{selected.price}</span>
                                                        </div>
                                                        <p></p>
                                                    </Link>
                                                </div>
                                            </InfoWindow>
                                        ) : null
                                }
                                </>
                                }
                                </>
                            }
                        </GoogleMap>
                    </LoadScript>
                </div>
            </div>
        </div>
    )

}

export default ProjectMap;
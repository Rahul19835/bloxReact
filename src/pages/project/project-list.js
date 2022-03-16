import React, {useState, useEffect, useContext} from "react";
import "./project-list.css";
import {Link} from "react-router-dom";
import Card from '../../components/card/card';
import Search from '../../components/search/search'
import { execluveData as projectdata } from '../../data';
import './project.css';
import ProjectMap from '../../components/map/map';
import {MapContext} from "../../components/contaxt/maps";

const Projectlist = () => {
    const {setCardMarkerHover, resetCardMarkerHover} = useContext(MapContext);
    const [showmap, setshowmap] = useState(false);
    const handleChange = () => {
        setshowmap(!showmap);
    }
    useEffect(() => { 
        document.querySelector("body").classList.add("listing-page") 
        setshowmap(!showmap);
    },[]);


    return(
        <>
            <section className="p60">
                <div className="filter">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="filer-sec">
                                    <div className="fil-left">
                                        <form>
                                            <div className="filter-sec">
                                                <Search />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="fil-right">
                                    <div className="fil-right">
                                        <div className="listView">
                                            <label className="switch">
                                                <input type="checkbox" id="checkbox" onChange={handleChange} checked={showmap}/>
                                                <div className="slider round"></div>
                                            </label>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dataList">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className={`list-project ${showmap ? 'list-project-map':''}`}>
                                    <div className="projeect-list">
                                        <div className="serTitle">
                                            <div className="inner-breadcrumb">
                                                <ul>
                                                    <li><Link to="/">Home</Link></li>
                                                    <li>Search</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="list-title">
                                            <span>{projectdata.length}</span> Apartments For Sale
                                        </div>
                                        <div className="project_list">
                                            {projectdata.map((projectList, index) =>
                                                <div className="list" key={index} onMouseEnter={() => setCardMarkerHover(projectList)} onMouseLeave={() => resetCardMarkerHover()}><Card
                                                    url={projectList.url}
                                                    img={projectList.img}
                                                    name={projectList.name}
                                                    location={projectList.location}
                                                    price={projectList.price}
                                                    flatTypes={projectList.flatTypes}
                                                    stamp={projectList.stamp}
                                                    project_id={projectList.project_id}
                                                    city_id={projectList.city_id}
                                                    pro_brif={projectList.pro_brif}
                                                    page="search"
                                                /></div>
                                            )
                                            }
                                        </div>
                                    </div>
                                    <div className={`projeect-map ${showmap ? 'show':''}`}>
                                        <ProjectMap variant="listing" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Projectlist;
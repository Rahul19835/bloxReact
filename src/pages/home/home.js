import React from "react";
import './home.css';
import banner from '../../images/banner.jpg';
import Search from "../../components/search/search";
import {homesearch, location, agreement, finance} from '../../icons/svg-icons';

const Home = () => {

const myHandler = () => {
    document.querySelectorAll('.side-list-item').forEach((element)=>{
        element.classList.remove('active')
    })
}
document.body.addEventListener('click', myHandler)

const handleActive = (e) => {
    e.stopPropagation();
    if(e.target.classList.contains('side-list-item')){
        if(e.target.classList.contains('active')){
            e.target.classList.remove('active')
        }else{
            document.querySelectorAll('.side-list-item').forEach((element)=>{
                element.classList.remove('active')
            })
            e.target.classList.add('active')
        }
    }
}

    return(
        <>
            {/* search */}
            <section>
                <div className="search-sec">
                    <div className="sback">
                        <img src={banner} className="img-fluid"/>
                    </div>
                    <div className="search-con">
                        <div className="hssec">
                            <div className="hsleft"></div>
                            <div className="hsright">
                                <div className="hsdiv">
                                    <div className="title">Buy your dream home</div>
                                    <p>Home Buying Will Never Be The Same</p>
                                    <div className="hm-search">
                                        <form>
                                            <Search home/>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* side option */}
                    <div className="side-options">
                        <ul className="side-option-list">
                            <li className="side-list-item" onClick={handleActive}>
                            <p><i className="icon header-icon" dangerouslySetInnerHTML={{__html: homesearch}}></i>Search</p>
                            <div className="slide-content">
                                <h4>Search</h4>
                                <p>Your Dream home you can search here in any location.</p>
                            </div>
                            </li>
                            <li className="side-list-item" onClick={handleActive}>
                            <p><i className="icon header-icon" dangerouslySetInnerHTML={{__html: location}}></i>Visit</p>
                            <div className="slide-content">
                                <h4>Visit</h4>
                                <p>Search, Explore and visit your dream home. </p>
                            </div>
                            </li>
                            <li className="side-list-item" onClick={handleActive}>
                            <p><i className="icon header-icon" dangerouslySetInnerHTML={{__html: homesearch}}></i>Book</p>
                            <div className="slide-content">
                                <h4>Book</h4>
                            <p>Pay directly to the developer.</p>
                            </div>
                            </li>
                            <li className="side-list-item" onClick={handleActive}>
                            <p><i className="icon header-icon" dangerouslySetInnerHTML={{__html: agreement}}></i>Agreement</p>
                            <div className="slide-content">
                                <h4>Agreement</h4>
                            <p>Book your home,  sit back and relax. Agreement is online. </p>
                            </div>
                            </li>
                            <li className="side-list-item" onClick={handleActive}>
                            <p><i className="icon header-icon" dangerouslySetInnerHTML={{__html: finance}}></i>Finance</p>
                            <div className="slide-content">
                                <h4>Finance</h4>
                                <p>Buying home is a dream for many and involves a lot of Home loans. We provide quick home loan from approved Banks.</p>
                            </div>
                            </li>
                        </ul>
                        </div>
                    {/* end side option */}
                </div>
            </section>
        </>
    )
}
export default Home;
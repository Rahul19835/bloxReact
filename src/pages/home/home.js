import React, { useState } from "react";
import Card from '../../components/card/card';
import Developerlist from '../../components/developer/developer';
import Newslist from '../../components/news/news';
import './home.css';
import banner from '../../images/banner.jpg';
import Search from "../../components/search/search";
import { homesearch, location, agreement, finance, developer, seller, clicks, sale } from '../../icons/svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import 'swiper/css';
import ProjectMap from '../../components/map/map';
import { execluveData, developerData, news } from '../../data';

import EnquiryContext from '../../components/contaxt/enquiry';
import { useContext } from "react";

const Home = () => {
    const [PPtype, setPPtype] = useState('affordable');

    

    const myHandler = () => {
        document.querySelectorAll('.side-list-item').forEach((element) => {
            element.classList.remove('active')
        })
    }
    document.body.addEventListener('click', myHandler)

    const handleActive = (e) => {
        e.stopPropagation();
        if (e.target.classList.contains('side-list-item')) {
            if (e.target.classList.contains('active')) {
                e.target.classList.remove('active')
            } else {
                document.querySelectorAll('.side-list-item').forEach((element) => {
                    element.classList.remove('active')
                })
                e.target.classList.add('active')
            }
        }
    }
    return (
        <>
            {/* search */}
            <section>
                <div className="search-sec">
                    <div className="sback">
                        <img src={banner} className="img-fluid" />
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
                                            <Search home />
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
                                <p><i className="icon header-icon" dangerouslySetInnerHTML={{ __html: homesearch }}></i>Search</p>
                                <div className="slide-content">
                                    <h4>Search</h4>
                                    <p>Your Dream home you can search here in any location.</p>
                                </div>
                            </li>
                            <li className="side-list-item" onClick={handleActive}>
                                <p><i className="icon header-icon" dangerouslySetInnerHTML={{ __html: location }}></i>Visit</p>
                                <div className="slide-content">
                                    <h4>Visit</h4>
                                    <p>Search, Explore and visit your dream home. </p>
                                </div>
                            </li>
                            <li className="side-list-item" onClick={handleActive}>
                                <p><i className="icon header-icon" dangerouslySetInnerHTML={{ __html: homesearch }}></i>Book</p>
                                <div className="slide-content">
                                    <h4>Book</h4>
                                    <p>Pay directly to the developer.</p>
                                </div>
                            </li>
                            <li className="side-list-item" onClick={handleActive}>
                                <p><i className="icon header-icon" dangerouslySetInnerHTML={{ __html: agreement }}></i>Agreement</p>
                                <div className="slide-content">
                                    <h4>Agreement</h4>
                                    <p>Book your home,  sit back and relax. Agreement is online. </p>
                                </div>
                            </li>
                            <li className="side-list-item" onClick={handleActive}>
                                <p><i className="icon header-icon" dangerouslySetInnerHTML={{ __html: finance }}></i>Finance</p>
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
            {/* ribban */}
            <section className="pt-5 pb-5 text-center bdicon">
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-md-3">
                            <i className="ribbanicon" dangerouslySetInnerHTML={{ __html: developer }}></i>
                            <div className="icontext">Direct listings from developers</div>
                        </div>
                        <div className="col-6 col-md-3">
                            <i className="ribbanicon" dangerouslySetInnerHTML={{ __html: seller }}></i>
                            <div className="icontext">Blox is an empanelled seller</div>
                        </div>
                        <div className="col-6 col-md-3">
                            <i className="ribbanicon" dangerouslySetInnerHTML={{ __html: clicks }}></i>
                            <div className="icontext">Buy a home in few clicks</div>
                        </div>
                        <div className="col-6 col-md-3">
                            <i className="ribbanicon" dangerouslySetInnerHTML={{ __html: sale }}></i>
                            <div className="icontext">100% inventory is for sale</div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Execluve */}
            <section className="p60 pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="heading">
                                <div className="title">Blox Exclusive</div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div id="hprolist">
                                <Swiper
                                    modules={[Autoplay]}
                                    loop={false}
                                    slidesPerView={3}
                                    spaceBetween={15}
                                    autoplay={{
                                        delay: 5000,
                                        disableOnInteraction: false,
                                    }}
                                    className="hprolist"
                                >
                                    {execluveData.slice(0, 4).map((execluveCard, index) =>
                                        <SwiperSlide key={index}><Card
                                            url={execluveCard.url}
                                            img={execluveCard.img}
                                            name={execluveCard.name}
                                            location={execluveCard.location}
                                            price={execluveCard.price}
                                            flatTypes={execluveCard.flatTypes}
                                            stamp={execluveCard.stamp}
                                            project_id={execluveCard.project_id}
                                            city_id={execluveCard.city_id}
                                        /></SwiperSlide>
                                    )
                                    }
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Fast Selling Project */}
            <section className="p60 fsp">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="heading">
                                <div className="title">Fast Selling Projects</div>
                            </div>
                        </div>
                        <div className="col-12 mt-2">
                            <div className="listproject">
                                {execluveData.map((fastsellingcard, index) =>
                                    <div className="list" key={index}><Card
                                        url={fastsellingcard.url}
                                        img={fastsellingcard.img}
                                        name={fastsellingcard.name}
                                        location={fastsellingcard.location}
                                        price={fastsellingcard.price}
                                        flatTypes={fastsellingcard.flatTypes}
                                        stamp={fastsellingcard.stamp}
                                        project_id={fastsellingcard.project_id}
                                        city_id={fastsellingcard.city_id}
                                    /></div>
                                )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Popular Projects */}
            <section className="p60 tl">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="heading text-center">
                                <div className="title">Popular Projects</div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="lo-list">
                                <ul>
                                    <li className={PPtype == 'affordable' ? 'active' : ""} onClick={() => setPPtype('affordable')}>Affordable</li>
                                    <li className={PPtype == 'premium' ? 'active' : ""} onClick={() => setPPtype('premium')}>Premium</li>
                                    <li className={PPtype == 'luxury' ? 'active' : ""} onClick={() => setPPtype('luxury')}>Luxury</li>
                                </ul>
                            </div>
                            <div className="lo-data">
                                <ProjectMap variant="home" type={PPtype}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Developer */}
            <section className="p60 devp">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="heading">
                                <div className="title">Developers</div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="dev-list homedev mt-2">
                                {developerData.slice(0, 4).map((developerData, index) =>
                                    <div className="list" key={index}>
                                        <Developerlist
                                            url={developerData.url}
                                            img={developerData.img}
                                            name={developerData.name}
                                            builder_id={developerData.builder_id}
                                            logo={developerData.logo}
                                            desc={developerData.desc}
                                            year={developerData.year}
                                            projects={developerData.projects}
                                        />
                                    </div>
                                )
                                }
                                <item></item>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* News */}
            <section className="p60">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="heading">
                                <div className="title">News</div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="news-list mt-2">
                                <Swiper
                                    modules={[Autoplay]}
                                    loop={false}
                                    slidesPerView={4}
                                    spaceBetween={20}
                                    autoplay={{
                                        delay: 5000,
                                        disableOnInteraction: false,
                                    }}
                                    className="news-list"
                                >
                                    {news.slice(0, 6).map((newsCard, index) =>
                                        <SwiperSlide key={index}><div className="item"><Newslist
                                            url={newsCard.url}
                                            img={newsCard.img}
                                            title={newsCard.title}
                                            date={newsCard.date}
                                        /></div></SwiperSlide>
                                    )
                                    }
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home;
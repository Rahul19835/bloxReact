import React from "react";
import Card from '../../components/card/card';
import './home.css';
import banner from '../../images/banner.jpg';
import Search from "../../components/search/search";
import {homesearch, location, agreement, finance, developer, seller, clicks, sale} from '../../icons/svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import 'swiper/css';

 const execluveData = [
     {  
        project_id: '1', 
        img: 'https://blox-prod-bucket.s3.amazonaws.com/projects/Kolte-Patil_Developers_Limited-Kolte-Patil_Jai_Vijay--Bedroom-1636967962.jpg',
        name: 'Kanakia Future City',
        location: 'MUMBAI',
        price: '₹1.72 Cr - ₹2.95 Cr',
        flatTypes: ['2 BHK, 2 BHK, 3 BHK, 4 BHK Flats', '429 sq. ft. to 1700 sq. ft.'],
        url: '',
        stamp: ['Blox Exclusive', 'Featured', 'Under construction'],
        city_id: '1'
     },
     {
        project_id: '2',
        img: 'https://blox-prod-bucket.s3.amazonaws.com/projects/Rustomjee-Rustomjee_Urbania--Bedroom-1636968497.jpg',
        name: 'Kanakia Future City1',
        location: 'MUMBAI',
        price: '₹1.72 Cr - ₹2.95 Cr',
        flatTypes: ['2 BHK, 2 BHK, 3 BHK, 4 BHK Flats', '429 sq. ft. to 1700 sq. ft.'],
        url: '',
        stamp: ['Blox Exclusive', 'Featured'],
        city_id: '2'
     },
     {
        project_id: '3',
        img: 'https://blox-prod-bucket.s3.amazonaws.com/projects/Piramal_Realty_Pvt_Ltd-Piramal_Mahalaxmi--Bedroom-1636968629.jpg',
        name: 'Kanakia Future City2',
        location: 'MUMBAI',
        price: '₹1.72 Cr - ₹2.95 Cr',
        flatTypes: ['2 BHK, 2 BHK, 3 BHK, 4 BHK Flats', '429 sq. ft. to 1700 sq. ft.'],
        url: '',
        stamp: ['Blox Exclusive', 'Under construction'],
        city_id: '3'
     },
     {
        project_id: '4',
        img: 'https://blox-prod-bucket.s3.amazonaws.com/projects/Piramal_Realty_Pvt_Ltd-Piramal_Mahalaxmi--Bedroom-1636968629.jpg',
        name: 'Kanakia Future City3',
        location: 'MUMBAI',
        price: '₹1.72 Cr - ₹2.95 Cr',
        flatTypes: ['2 BHK, 2 BHK, 3 BHK, 4 BHK Flats', '429 sq. ft. to 1700 sq. ft.'],
        url: '',
        stamp: ['Featured',],
        city_id: '4'
     },
     {  
        project_id: '1', 
        img: 'https://blox-prod-bucket.s3.amazonaws.com/projects/Kolte-Patil_Developers_Limited-Kolte-Patil_Jai_Vijay--Bedroom-1636967962.jpg',
        name: 'Kanakia Future City',
        location: 'MUMBAI',
        price: '₹1.72 Cr - ₹2.95 Cr',
        flatTypes: ['2 BHK, 2 BHK, 3 BHK, 4 BHK Flats', '429 sq. ft. to 1700 sq. ft.'],
        url: '',
        stamp: ['Blox Exclusive', 'Featured', 'Under construction'],
        city_id: '1'
     },
     {
        project_id: '2',
        img: 'https://blox-prod-bucket.s3.amazonaws.com/projects/Rustomjee-Rustomjee_Urbania--Bedroom-1636968497.jpg',
        name: 'Kanakia Future City1',
        location: 'MUMBAI',
        price: '₹1.72 Cr - ₹2.95 Cr',
        flatTypes: ['2 BHK, 2 BHK, 3 BHK, 4 BHK Flats', '429 sq. ft. to 1700 sq. ft.'],
        url: '',
        stamp: ['Blox Exclusive', 'Featured'],
        city_id: '2'
     }
 ]

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
            {/* ribban */}
            <section className="pt-5 pb-5 text-center bdicon">
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-md-3">
                            <i className="ribbanicon" dangerouslySetInnerHTML={{__html: developer}}></i>
                            <div className="icontext">Direct listings from developers</div>
                        </div>
                        <div className="col-6 col-md-3">
                            <i className="ribbanicon" dangerouslySetInnerHTML={{__html: seller}}></i>
                            <div className="icontext">Blox is an empanelled seller</div>
                        </div>
                        <div className="col-6 col-md-3">
                            <i className="ribbanicon" dangerouslySetInnerHTML={{__html: clicks}}></i>
                            <div className="icontext">Buy a home in few clicks</div>
                        </div>
                        <div className="col-6 col-md-3">
                            <i className="ribbanicon" dangerouslySetInnerHTML={{__html: sale}}></i>
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
                                spaceBetween={20}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }}
                                className="hprolist"
                            >
                                {execluveData.slice(0, 4).map((execluveCard, index)=> 
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
                                {execluveData.map((execluveCard, index)=> 
                                    <list><Card key={index}
                                        url={execluveCard.url}
                                        img={execluveCard.img}
                                        name={execluveCard.name} 
                                        location={execluveCard.location}
                                        price={execluveCard.price}
                                        flatTypes={execluveCard.flatTypes}
                                        stamp={execluveCard.stamp}
                                        project_id={execluveCard.project_id}
                                        city_id={execluveCard.city_id}
                                    /></list>
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
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home;
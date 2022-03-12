import React, {useState} from "react";
import Search from '../../components/search/search'
import './project.css';
const Projectlist = () => {


    return(
        <>
            <section className="p60 filter">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="filer-sec">
                                <div className="fil-left">
                                    <form>
                                       <Search />
                                    </form>
                                </div>
                                <div className="fil-right"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Projectlist;
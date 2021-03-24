import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className="container banner">
            <div className="row">
                <div className="col-md-6 order-md-1 order-2 col-sm-12 bannerText">
                <h3>Making the most of the <br/>
                ever-growing <br/>
                <span style={{color:"#FF464F"}}>Information Technology</span>
                </h3>
                <p className="pt-2">Managed by a team of professional experts with extensive experience and impressive track records</p>
                <button className="btn mt-2">Read More</button>
                </div>
                <div className="col-md-6 order-md-2 order-1 col-sm-12">
                    <img className="img-fluid" src="https://i.ibb.co/tqPHhyS/pana2.png" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Banner;
import React from 'react';
import './Middle.css'
const Middle = () => {
    return (
        <div className='middle py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <img className="img-fluid animated" src="https://i.ibb.co/FqRxSr9/pana.png" alt=""/>
                    </div>
                    <div className="col-md-6 pt-4">
                    <h4>Welcome to <span style={{color:"#FF464F"}}>Dwidasa Samsara Indonesia (DSI)</span> </h4><br/>
                    <p>Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by the founders, who each of them has a common end objective to innovate new creations by making the most of the ever-growing information technology through<span style={{color:"#EE4248",fontWeight:"bold"}}>DSI</span>’s distinct front-end based application concept.<br/><br/>
Managed by a team of professional experts with extensive experience and impressive track records, <span style={{color:"#EE4248",fontWeight:"bold"}}>DSI</span> believes that continuous improvements and innovations assure your business to run effectively and efficiently.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Middle;
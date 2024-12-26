import React from 'react';
import './Services.css'; // Import the CSS file
import room1 from "../assets/palash.webp";

const Services = () => {
    return (
        <div className="image-text-container">
            <img className="left-image" src={room1} alt="Room 1" />
            <div className="text-content">
                {/* <h1>SERVICES -------</h1> */}
                <h2>Strive Only For The <br></br> Best.</h2>
                <div className="services">
                    <div className="service">
                        <i className="icon">&#x1F6E1;&#xFE0F;</i>
                        <p>High Class Security</p>
                    </div>
                    <div className="service">
                        <i className="icon">⏰</i>
                        <p>24 Hours Room Service</p>
                    </div>
                    <div className="service">
                        <i className="icon">&#x1F37D;</i>
                        <p>Restaurant</p>
                    </div>
                    <div className="service">
                        <i className="icon">&#x1F5FA;&#xFE0F;</i>
                        <p>Tourist Guide Support</p>
                    </div>
                </div>
            </div>
            <img className="right-image" src={room1} alt="Room 2" />
        </div>
    );
}

export default Services;

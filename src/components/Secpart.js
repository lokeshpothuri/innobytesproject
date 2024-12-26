import React from 'react';
import './Secpart.css'; // Importing the CSS file for styling
import guestImage from '../assets/out.jpg';

const Secpart = () => {
    return (
        <div className="container">
            <div className="image-section">
                <img 
                    src={guestImage}  
                    alt="Guest House" 
                    className="guest-image" 
                />
            </div>
            <div className="content-section">
                <h3 className="about-heading">About Us</h3>
                <h1 className="main-heading">The Best Holidays Start Here!</h1>
                <p className="description">
                    Embark on a tranquil journey at our Kingsukh Guest House, enveloped by 
                    the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, 
                    Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating 
                    Panchat Dam. Revel in the embrace of comfort, relish delightful meals, 
                    and unwind in our verdant garden oasis. Your ideal retreat beckons, promising 
                    a harmonious blend of nature's beauty and heartfelt hospitality. Explore the 
                    hidden gems of Purulia, creating memories that linger long after your stay.
                </p>
                <p className="address">
                    <strong>Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</strong><br />
                    <strong>Contact us: +91 9007062180</strong>
                </p>
                <button className="book-button">Book Now</button>
            </div>
        </div>
    );
};

export default Secpart;

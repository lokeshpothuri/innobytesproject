import React from 'react';
import './Bottom.css';

const Bottom = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h2>Kingsukh Guest House</h2>
        <p>
          Discover a world of comfort, luxury, and adventure as you explore our curated selection of hotels,
          making every moment of your getaway truly extraordinary.
        </p>
        <button className="book-now-button">BOOK NOW</button>
      </div>
      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li>Browse Destinations</li>
          <li>Special Offers & Packages</li>
          <li>Room Types & Amenities</li>
          <li>Customer Reviews & Ratings</li>
          <li>Travel Tips & Guides</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Our Services</h3>
        <ul>
          <li>Concierge Assistance</li>
          <li>Flexible Booking Options</li>
          <li>Airport Transfers</li>
          <li>Wellness & Recreation</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Contact Us</h3>
        <p>
          Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
        </p>
        <p>Email: kkghosh0099@gmail.com</p>
        <p>Phone: +91 9007062180</p>
        <div className="social-media">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-twitter"></i>
        </div>
      </div>
      <div className="footer-bottom">
        Copyright © 2024 Kingsukh Guest House. All rights reserved.
      </div>
    </footer>
  );
}

export default Bottom;

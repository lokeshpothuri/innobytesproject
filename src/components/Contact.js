import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-base">
        <div className="contact-info">
          <h2>Contact Info</h2>
          <p><i className="fas fa-map-marker-alt"></i> Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156</p>
          <p><i className="fas fa-envelope"></i> kkghosh0099@gmail.com</p>
          <p><i className="fas fa-phone"></i> +91 9007062180</p>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>
        <div className="contact-form">
          <h2>Send a Message</h2>
          <div className="form-group">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email Address" />
            <input type="text" placeholder="Mobile Number" />
          </div>
          <textarea placeholder="Write your message here..."></textarea>
          <button type="submit">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

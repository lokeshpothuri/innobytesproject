import React from 'react';
import './Small.css'; // Import the CSS file

const Small = () => {
  return (
    <div className="small-container">
      <div className="stat-item">
        <h3>100+</h3>
        <p>Bookings Completed</p>
      </div>
      <div className="stat-item">
        <h3>150+</h3>
        <p>Happy Customers</p>
      </div>
    </div>
  );
};

export default Small;

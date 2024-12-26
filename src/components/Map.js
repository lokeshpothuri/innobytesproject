import React from 'react';
import './Map.css';

const Map = () => {
  return (
    <div className="map-container">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.764676113365!2d86.89043551544422!3d23.414231309852996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f763f9c4cbf2f1%3A0x9bda9dc276a716c7!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1636441719988!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Map;

import React from 'react';
import './Gallery.css';
import one from "../assets/out.jpg";
import two from "../assets/ayodhya.webp";
import three from "../assets/large.jpg";
import fourth from "../assets/palash.webp";
import fifth from "../assets/small.jpg";
import sixth from "../assets/baranti.webp";
import seventh from "../assets/recep.jpg";
import eighth from "../assets/flower.jpg";
import ninth from "../assets/room1.jpg";
// import tenth from "../assets/mithonDam.webp";

const images = [
    one,
    two,
    three,
    fourth,
    fifth,
    sixth,
    seventh,
    eighth,
    ninth,
    // tenth
];

const Gallery = () => {
  return (
    <div>
      <div className="galhead">
        <p>GALLERY </p>
      </div>
      <div className="masonry-container">
        {images.map((image, index) => (
          <div key={index} className="masonry-item">
            <img src={image} alt={`Gallery ${index}`} className="masonry-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

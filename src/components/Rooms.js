import React from "react";
import "./Rooms.css"; // Assuming you have a CSS file for styling
import room1 from "../assets/room1.jpg";
import room2 from "../assets/small.jpg";

const RoomCard = ({ image, title, description, price }) => {
    return (
        <div className="room-card">
            <img src={image} alt={title} className="room-image" />
            <div className="room-details">
                <h3 className="room-title">{title}</h3>
                <p className="room-description">{description}</p>
                <p className="room-price">Starting from <strong>{price}</strong>/night</p>
                <button className="book-now-btn">BOOK NOW</button>
            </div>
            <div className="room-icons">
                <i className="icon-heart">❤️</i>
                <i className="icon-design">&#x1F3E0;</i>
                <i className="icon-shield">&#x1F6E1;&#xFE0F;</i>
                
            </div>
        </div>
    );
};

const Rooms = () => {
    const rooms = [
        {
            image: room1, // Replace with actual image paths
            title: "Cozy Haven Room",
            description: "Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.",
            price: "Rs. 1000"
        },
        {
            image: room2, // Replace with actual image paths
            title: "Spacious Serenity Suite",
            description: "Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.",
            price: "Rs. 1500"
        },
    ];

    return (
        <div className="rooms-section">
            <h2 className="section-title">Our Living Room</h2>
            <h3 className="section-subtitle">The Most Memorable Rest</h3>
            <h3 className="section-subtitlecont">Time Starts Here.</h3>
            <div className="rooms-container">
                {rooms.map((room, index) => (
                    <RoomCard
                        key={index}
                        image={room.image}
                        title={room.title}
                        description={room.description}
                        price={room.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default Rooms;

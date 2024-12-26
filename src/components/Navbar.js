import React, { useState } from "react";
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMenuOpen(false); // Close menu after clicking
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>Kingsukh<br />Guest House</h1>
            </div>

            {/* Hamburger menu */}
            <div className="hamburger" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* Navigation links */}
            <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                <li onClick={() => scrollToSection('home')}>Home</li>
                <li onClick={() => scrollToSection('about')}>About</li>
                <li onClick={() => scrollToSection('services')}>Services</li>
                <li onClick={() => scrollToSection('rooms')}>Rooms</li>
                <li onClick={() => scrollToSection('gallery')}>Gallery</li>
                <li onClick={() => scrollToSection('contact')}>Contact</li>
            </ul>

            <div className="navbar-button">
                <button>Book Now</button>
            </div>
        </nav>
    );
};

export default Navbar;

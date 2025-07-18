import React from "react";
import videoFile from '../Assets/4622325-uhd_4096_2160_25fps.mp4'; // Adjust path if needed
import './Hero.css';


const Hero = () => {
    return (
        <div className="hero">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="hero-video"
            >
                <source src={videoFile} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay Content */}
            <div className="hero-overlay">
                <h1>Welcome to Everlane BD</h1>
                <p className="hero-subtitle">
                    <span className="highlight">  Elevating Style with Premium Apparel & Fashion</span>, <span className="highlight">Fine Leather Shoes</span>, <br />
                    <span className = "highlight" >Artisanal Handcrafted Treasures, and </span> <span className="highlight">Premium Cosmetics</span>
                </p>

            </div>
        </div>
    );
};

export default Hero;

import React from "react";
import { useNavigate } from "react-router-dom";
import "./Womensweater.css";
import Footer from "../Footerr/Footer,jsx";
import women_cashmere_crew_sweater from '../Assets/women_cashmere_chew_sweater.png';

const Womensweater = () => {
    const navigate = useNavigate();

    // Women's sweater data
    const sweaters = [
        { id: 1, name: "CASHMERE CREWNECK", color: "Ivory", image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9" },
        { id: 2, name: "CHUNKY KNIT CARDIGAN", color: "Camel", image: women_cashmere_crew_sweater },
        { id: 3, name: "TURTLENECK SWEATER", color: "Black", image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9" },
        { id: 4, name: "OVERSIZED CABLE KNIT", color: "Cream", image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9" },
        { id: 5, name: "V-NECK MERINO WOOL", color: "Burgundy", image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9" },
        { id: 6, name: "CROPPED MOHAIR SWEATER", color: "Pink", image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9" },
        { id: 7, name: "FISHERMAN RIB SWEATER", color: "Navy", image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9" },
        { id: 8, name: "BELTED CARDIGAN", color: "Gray", image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9" },
        { id: 9, name: "ALPACA BLEND SWEATER", color: "Moss Green", image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9" },
        { id: 10, name: "OFF-SHOULDER SWEATER", color: "Dusty Rose", image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9" }
    ];

    return (
        <>
            <div className="womensweater-container">
                <h2 className="collection-title">WOMEN'S SWEATER COLLECTION</h2>
                <div className="womensweater-grid">
                    {sweaters.map((sweater) => (
                        <div key={sweater.id} className="womensweater-item">
                            <div className="womensweater-image-container">
                                <img
                                    src={sweater.image}
                                    alt={sweater.name}
                                    className="womensweater-image"
                                />
                            </div>
                            <div className="womensweater-details">
                                <h3 className="womensweater-name">{sweater.name}</h3>
                                <p className="womensweater-color">{sweater.color}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button
                className="home-button"
                onClick={() => navigate('/')}
            >
                HOME
            </button>

            <div className="full-width-footer">
                <Footer />
            </div>
        </>
    );
};

export default Womensweater;
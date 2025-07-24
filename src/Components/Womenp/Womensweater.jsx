import React from "react";
import { useNavigate } from "react-router-dom";
import "./Womensweater.css"; // Create this CSS file
import Footer from "../Footerr/Footer,jsx";
import women_cashmere_chew_sweater from '../Assets/women_cashmere_chew_sweater.png'; // Update with your sweater image path

const Womensweater = () => {
    const navigate = useNavigate();

    // Women's sweater data
    const sweaters = [
        { id: 1, name: "Cashmere Crewneck", color: "Ivory",  image: "https://via.placeholder.com/300x300?text=Cashmere+Crew" },
        { id: 2, name: "Chunky Knit Cardigan", color: "Camel", image: women_cashmere_chew_sweater },
        { id: 3, name: "Turtleneck Sweater", color: "Black",  image: "https://via.placeholder.com/300x300?text=Turtleneck" },
        { id: 4, name: "Oversized Cable Knit", color: "Cream",  image: "https://via.placeholder.com/300x300?text=Cable+Knit" },
        { id: 5, name: "V-Neck Merino Wool", color: "Burgundy", image: "https://via.placeholder.com/300x300?text=Merino+Wool" },
        { id: 6, name: "Cropped Mohair Sweater", color: "Pink", image: "https://via.placeholder.com/300x300?text=Mohair" },
        { id: 7, name: "Fisherman Rib Sweater", color: "Navy",  image: "https://via.placeholder.com/300x300?text=Fisherman" },
        { id: 8, name: "Belted Cardigan", color: "Gray", image: "https://via.placeholder.com/300x300?text=Belted+Cardi" },
        { id: 9, name: "Alpaca Blend Sweater", color: "Moss Green", image: "https://via.placeholder.com/300x300?text=Alpaca" },
        { id: 10, name: "Off-Shoulder Sweater", color: "Dusty Rose", image: "https://via.placeholder.com/300x300?text=Off-Shoulder" }
    ];

    return (
        <>
            <div className="womensweater-page">
                <header className="page-header">
                    <h1>Women's Sweater Collection</h1>
                    <p>Luxurious knits for cozy comfort</p>
                </header>

                <div className="sweaters-grid">
                    {sweaters.map((sweater) => (
                        <div key={sweater.id} className="sweater-card">
                            <div className="sweater-image">
                                <img src={sweater.image} alt={sweater.name} />
                            </div>
                            <div className="sweater-info">
                                <h3>{sweater.name}</h3>
                                <p>Color: {sweater.color}</p>
                                <p className="price">{sweater.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button
                className="home-button bottom-home-button"
                onClick={() => navigate('/')}
            >
                Home
            </button>
            <Footer/>

        </>
    );
};

export default Womensweater;
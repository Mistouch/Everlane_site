import React from "react";
import Footer from "../Footerr/Footer,jsx";
import "./Kidsweater.css";
import cozy_bear from '../Assets/Kid_cozy_bear.png'; // You'll need to add these images
import { useNavigate } from "react-router-dom";

const Kidsweater = () => {
    const navigate = useNavigate();

    // Sample kids sweater data
    const kidsSweaters = [
        { id: 1, name: "Cozy Bear Sweater", color: "Light Blue", image: cozy_bear },
        { id: 2, name: "Striped Wool Sweater", color: "Navy/White", image: "https://via.placeholder.com/300x300?text=Striped+Sweater" },
        { id: 3, name: "Reindeer Pattern", color: "Red", image: "https://via.placeholder.com/300x300?text=Reindeer+Sweater" },
        { id: 4, name: "Rainbow Cardigan", color: "Multicolor", image: "https://via.placeholder.com/300x300?text=Rainbow+Cardigan" },
        { id: 5, name: "Knit Cable Sweater", color: "Cream", image: "https://via.placeholder.com/300x300?text=Cable+Knit" },
        { id: 6, name: "Dinosaur Hoodie", color: "Green", image: "https://via.placeholder.com/300x300?text=Dino+Hoodie" },
        { id: 7, name: "Polar Fleece Jacket", color: "Pink", image: "https://via.placeholder.com/300x300?text=Fleece+Jacket" },
        { id: 8, name: "Snowflake Pattern", color: "White", image: "https://via.placeholder.com/300x300?text=Snowflake+Sweater" },
        { id: 9, name: "Animal Ear Hoodie", color: "Gray", image: "https://via.placeholder.com/300x300?text=Animal+Hoodie" },
        { id: 10, name: "Fair Isle Knit", color: "Navy/Red", image: "https://via.placeholder.com/300x300?text=Fair+Isle" }
    ];

    return (
        <>
            <div className="kidsweater-page">
                <header className="page-header">
                    <h1>Kids Sweaters Collection</h1>
                    <p>Warm and cozy sweaters for chilly days</p>
                </header>

                <div className="sweaters-grid">
                    {kidsSweaters.map((sweater) => (
                        <div key={sweater.id} className="sweater-card">
                            <div className="sweater-image">
                                <img
                                    src={sweater.image}
                                    alt={sweater.name}
                                    onError={(e) => {
                                        e.target.src = "https://via.placeholder.com/300x300?text=Image+Not+Found";
                                    }}
                                />
                            </div>
                            <div className="sweater-info">
                                <h3>{sweater.name}</h3>
                                <p>Color: {sweater.color}</p>
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
            <div className="full-width-footer">
                <Footer />
            </div>
        </>
    );
};

export default Kidsweater;
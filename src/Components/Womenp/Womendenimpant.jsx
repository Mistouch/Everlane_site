import React from "react";
import { useNavigate } from "react-router-dom";
import "./Womendenimpant.css";
import women_dark_wash_deninmpant from '../Assets/women_dark_wash_deninmpant.png';
import Footer from "../Footerr/Footer,jsx"; // Make sure to import Footer

const Womendenimpant = () => {
    const navigate = useNavigate();

    const denimPants = [
        { id: 1, name: "Skinny Jeans", color: "Dark Wash", fit: "High Waist", image: "https://via.placeholder.com/300x300?text=Dark+Skinny" },
        { id: 2, name: "Mom Jeans", color: "Medium Wash", fit: "Mid Rise", image: women_dark_wash_deninmpant },
        { id: 3, name: "Bootcut Jeans", color: "Black", fit: "Mid Waist", image: "https://via.placeholder.com/300x300?text=Black+Bootcut" },
        { id: 4, name: "Flared Jeans", color: "Light Wash", fit: "High Waist", image: "https://via.placeholder.com/300x300?text=Light+Flared" },
        { id: 5, name: "Straight Leg", color: "Indigo", fit: "Regular Rise", image: "https://via.placeholder.com/300x300?text=Indigo+Straight" },
        { id: 6, name: "Boyfriend Jeans", color: "Distressed", fit: "Loose", image: "https://via.placeholder.com/300x300?text=Distressed+Boyfriend" },
        { id: 7, name: "High-Waisted", color: "White", fit: "Slim", image: "https://via.placeholder.com/300x300?text=White+HighWaist" },
        { id: 8, name: "Cropped Jeans", color: "Gray", fit: "Ankle Length", image: "https://via.placeholder.com/300x300?text=Gray+Cropped" },
        { id: 9, name: "Wide Leg", color: "Vintage Blue", fit: "Relaxed", image: "https://via.placeholder.com/300x300?text=Vintage+WideLeg" },
        { id: 10, name: "Jeggings", color: "Charcoal", fit: "Stretchy", image: "https://via.placeholder.com/300x300?text=Charcoal+Jeggings" }
    ];

    return (
        <>
            <div className="womendenim-page">
                <header className="page-header">
                    <h1>Women's Denim Pants Collection</h1>
                    <p>Stylish denim for every occasion</p>
                </header>

                <div className="denim-grid">
                    {denimPants.map((pants) => (
                        <div key={pants.id} className="denim-card">
                            <div className="denim-image">
                                <img src={pants.image} alt={pants.name} />
                            </div>
                            <div className="denim-info">
                                <h3>{pants.name}</h3>
                                <p>Color: {pants.color}</p>
                                <p>Fit: {pants.fit}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Button positioned inside main container */}
                <button
                    className="home-button bottom-home-button"
                    onClick={() => navigate('/')}
                >
                    Home
                </button>
            </div>

            {/* Full width footer */}
            <div className="full-width-footer">
                <Footer />
            </div>
        </>
    );
};

export default Womendenimpant;
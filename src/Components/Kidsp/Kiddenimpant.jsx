import React from "react";
import Footer from "../Footerr/Footer,jsx";
import './Kiddenimpant.css'
import kid_classic_denim_pant from '../Assets/kid_classic_denim_pant.png'; // Add your actual images
import { useNavigate } from "react-router-dom";

const Kiddenimpant = () => {
    const navigate = useNavigate();

    // Sample kids denim pants data
    const kidDenimPants = [
        { id: 1, name: "Classic Blue Jeans", color: "Light Blue", size: "4-5Y", fit: "Regular", image: kid_classic_denim_pant },
        { id: 2, name: "Slim Fit Jeans", color: "Dark Blue", size: "6-7Y", fit: "Slim", image: "https://via.placeholder.com/300x300?text=Slim+Jeans" },
        { id: 3, name: "Distressed Denim", color: "Medium Wash", size: "5-6Y", fit: "Regular", image: "https://via.placeholder.com/300x300?text=Distressed+Denim" },
        { id: 4, name: "Skinny Jeans", color: "Black", size: "3-4Y", fit: "Skinny", image: "https://via.placeholder.com/300x300?text=Skinny+Jeans" },
        { id: 5, name: "Cargo Denim", color: "Stone Wash", size: "8-9Y", fit: "Relaxed", image: "https://via.placeholder.com/300x300?text=Cargo+Denim" },
        { id: 6, name: "Patched Jeans", color: "Light Wash", size: "5-6Y", fit: "Regular", image: "https://via.placeholder.com/300x300?text=Patched+Jeans" },
        { id: 7, name: "Ripped Jeans", color: "Medium Blue", size: "7-8Y", fit: "Slim", image: "https://via.placeholder.com/300x300?text=Ripped+Jeans" },
        { id: 8, name: "Stretch Denim", color: "Dark Wash", size: "4-5Y", fit: "Skinny", image: "https://via.placeholder.com/300x300?text=Stretch+Denim" },
        { id: 9, name: "Wide Leg Jeans", color: "Vintage Blue", size: "6-7Y", fit: "Wide", image: "https://via.placeholder.com/300x300?text=Wide+Leg" },
        { id: 10, name: "Denim Overalls", color: "Blue", size: "5-6Y", fit: "Regular", image: "https://via.placeholder.com/300x300?text=Denim+Overalls" }
    ];

    return (
        <>
            <div className="kid-denim-pants-page">
                <header className="page-header">
                    <h1>Kids Denim Pants Collection</h1>
                    <p>Durable and comfortable denim pants for active kids</p>
                </header>

                <div className="pants-grid">
                    {kidDenimPants.map((pant) => (
                        <div key={pant.id} className="pant-card">
                            <div className="pant-image">
                                <img
                                    src={pant.image}
                                    alt={pant.name}
                                    onError={(e) => {
                                        e.target.src = "https://via.placeholder.com/300x300?text=Image+Not+Found";
                                    }}
                                />
                            </div>
                            <div className="pant-info">
                                <h3>{pant.name}</h3>
                                <p>Color: {pant.color}</p>
                                <p>Size: {pant.size}</p>
                                <p>Fit: {pant.fit}</p>
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

export default Kiddenimpant;
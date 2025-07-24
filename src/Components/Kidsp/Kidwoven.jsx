import React from "react";
import Footer from "../Footerr/Footer,jsx";
import "./Kidwoven.css";
import kid_plaid_shirt from '../Assets/kid_plaid_shirt.png'; // You'll need to add these images
import { useNavigate } from "react-router-dom";

const Kidwoven = () => {
    const navigate = useNavigate();

    // Sample kids woven products data
    const kidWovens = [
        { id: 1, name: "Denim Overalls", color: "Blue", type: "Overalls", image: "https://via.placeholder.com/300x300?text=Khaki+Shorts" },
        { id: 2, name: "Plaid Shirt", color: "Red/Black", type: "Shirt", image: kid_plaid_shirt },
        { id: 3, name: "Khaki Shorts", color: "Beige", type: "Shorts", image: "https://via.placeholder.com/300x300?text=Khaki+Shorts" },
        { id: 4, name: "Denim Jacket", color: "Light Blue", type: "Jacket", image: "https://via.placeholder.com/300x300?text=Denim+Jacket" },
        { id: 5, name: "Checked Dress", color: "Yellow/White", type: "Dress", image: "https://via.placeholder.com/300x300?text=Checked+Dress" },
        { id: 6, name: "Corduroy Pants", color: "Brown", type: "Pants", image: "https://via.placeholder.com/300x300?text=Corduroy+Pants" },
        { id: 7, name: "Linen Shirt", color: "White", type: "Shirt", image: "https://via.placeholder.com/300x300?text=Linen+Shirt" },
        { id: 8, name: "Twill Jumper", color: "Navy", type: "Jumper", image: "https://via.placeholder.com/300x300?text=Twill+Jumper" },
        { id: 9, name: "Chambray Shirt", color: "Light Blue", type: "Shirt", image: "https://via.placeholder.com/300x300?text=Chambray+Shirt" },
        { id: 10, name: "Denim Skirt", color: "Dark Blue", type: "Skirt", image: "https://via.placeholder.com/300x300?text=Denim+Skirt" }
    ];

    return (
        <>
            <div className="kidwoven-page">
                <header className="page-header">
                    <h1>Kids Woven Collection</h1>
                    <p>Durable and stylish woven clothing for kids</p>
                </header>

                <div className="wovens-grid">
                    {kidWovens.map((woven) => (
                        <div key={woven.id} className="woven-card">
                            <div className="woven-image">
                                <img
                                    src={woven.image}
                                    alt={woven.name}
                                    onError={(e) => {
                                        e.target.src = "https://via.placeholder.com/300x300?text=Image+Not+Found";
                                    }}
                                />
                            </div>
                            <div className="woven-info">
                                <h3>{woven.name}</h3>
                                <p>Color: {woven.color}</p>
                                <p>Type: {woven.type}</p>
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

export default Kidwoven;
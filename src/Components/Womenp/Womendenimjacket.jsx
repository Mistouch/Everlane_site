import React from "react";
import { useNavigate } from "react-router-dom";
import "./Womendenimjacket.css";
import women_classic_denim_medium_w from '../Assets/women_classic_denim_medium_w.png'; // Update with your image path
import Footer from "../Footerr/Footer,jsx";

const Womendenimjacket = () => {
    const navigate = useNavigate();

    // Women's denim jacket data
    const denimJackets = [
        { id: 1, name: "Classic Denim Jacket", color: "Medium Wash", fit: "Regular", image: "https://via.placeholder.com/300x300?text=Classic+Jacket" },
        { id: 2, name: "Oversized Denim Jacket", color: "Light Wash", fit: "Loose", image: women_classic_denim_medium_w },
        { id: 3, name: "Cropped Denim Jacket", color: "Black", fit: "Short", image: "https://via.placeholder.com/300x300?text=Cropped+Jacket" },
        { id: 4, name: "Distressed Denim Jacket", color: "Dark Wash", fit: "Slim", image: "https://via.placeholder.com/300x300?text=Distressed+Jacket" },
        { id: 5, name: "Embroidered Denim Jacket", color: "Light Blue", fit: "Regular", image: "https://via.placeholder.com/300x300?text=Embroidered+Jacket" },
        { id: 6, name: "Sherpa-Lined Jacket", color: "Medium Wash", fit: "Oversized", image: "https://via.placeholder.com/300x300?text=Sherpa+Jacket" },
        { id: 7, name: "Acid Wash Jacket", color: "Vintage Wash", fit: "Regular", image: "https://via.placeholder.com/300x300?text=Acid+Wash" },
        { id: 8, name: "Belted Denim Jacket", color: "White", fit: "Fitted", image: "https://via.placeholder.com/300x300?text=Belted+Jacket" },
        { id: 9, name: "Patchwork Denim Jacket", color: "Multi-Color", fit: "Regular", image: "https://via.placeholder.com/300x300?text=Patchwork+Jacket" },
        { id: 10, name: "Trucker Denim Jacket", color: "Dark Indigo", fit: "Classic", image: "https://via.placeholder.com/300x300?text=Trucker+Jacket" }
    ];

    return (
        <>
            <div className="womendenimjacket-page">
                <header className="page-header">
                    <h1>Women's Denim Jacket Collection</h1>
                    <p>Trendy denim jackets for every style</p>
                </header>

                <div className="jacket-grid">
                    {denimJackets.map((jacket) => (
                        <div key={jacket.id} className="jacket-card">
                            <div className="jacket-image">
                                <img src={jacket.image} alt={jacket.name} />
                            </div>
                            <div className="jacket-info">
                                <h3>{jacket.name}</h3>
                                <p>Color: {jacket.color}</p>
                                <p>Fit: {jacket.fit}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    className="home-button bottom-home-button"
                    onClick={() => navigate('/')}
                >
                    Home
                </button>
            </div>

            <div className="full-width-footer">
                <Footer />
            </div>
        </>
    );
};

export default Womendenimjacket;
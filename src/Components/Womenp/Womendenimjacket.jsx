import React from "react";
import { useNavigate } from "react-router-dom";
import "./Womendenimjacket.css";
import women_classic_denim_medium_w from '../Assets/women_classic_denim_medium_w.png';
import Footer from "../Footerr/Footer,jsx";

const Womendenimjacket = () => {
    const navigate = useNavigate();

    // Women's denim jacket data
    const denimJackets = [
        { id: 1, name: "CLASSIC DENIM JACKET", color: "Medium Wash", fit: "Regular", image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9" },
        { id: 2, name: "OVERSIZED DENIM JACKET", color: "Light Wash", fit: "Loose", image: women_classic_denim_medium_w },
        { id: 3, name: "CROPPED DENIM JACKET", color: "Black", fit: "Short", image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9" },
        { id: 4, name: "DISTRESSED DENIM JACKET", color: "Dark Wash", fit: "Slim", image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9" },
        { id: 5, name: "EMBROIDERED DENIM JACKET", color: "Light Blue", fit: "Regular", image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9" },
        { id: 6, name: "SHERPA-LINED JACKET", color: "Medium Wash", fit: "Oversized", image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9" },
        { id: 7, name: "ACID WASH JACKET", color: "Vintage Wash", fit: "Regular", image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9" },
        { id: 8, name: "BELTED DENIM JACKET", color: "White", fit: "Fitted", image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9" },
        { id: 9, name: "PATCHWORK DENIM JACKET", color: "Multi-Color", fit: "Regular", image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9" },
        { id: 10, name: "TRUCKER DENIM JACKET", color: "Dark Indigo", fit: "Classic", image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9" }
    ];

    return (
        <>
            <div className="womendenimjacket-container">
                <h2 className="collection-title">WOMEN'S DENIM JACKETS</h2>
                <div className="womendenimjacket-grid">
                    {denimJackets.map((jacket) => (
                        <div key={jacket.id} className="womendenimjacket-item">
                            <div className="womendenimjacket-image-container">
                                <img
                                    src={jacket.image}
                                    alt={jacket.name}
                                    className="womendenimjacket-image"
                                />
                            </div>
                            <div className="womendenimjacket-details">
                                <h3 className="womendenimjacket-name">{jacket.name}</h3>
                                <p className="womendenimjacket-color">{jacket.color}</p>
                                <p className="womendenimjacket-fit">{jacket.fit}</p>
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

export default Womendenimjacket;
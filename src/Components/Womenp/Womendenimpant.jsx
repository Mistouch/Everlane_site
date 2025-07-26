import React from "react";
import { useNavigate } from "react-router-dom";
import "./Womendenimpant.css";
import women_dark_wash_deninmpant from '../Assets/women_dark_wash_deninmpant.png';
import Footer from "../Footerr/Footer,jsx";

const Womendenimpant = () => {
    const navigate = useNavigate();

    const denimPants = [
        { id: 1, name: "SKINNY FIT JEANS", color: "DARK WASH" ,image:  women_dark_wash_deninmpant},
        { id: 2, name: "MOM JEANS", color: "MEDIUM WASH", image: women_dark_wash_deninmpant },
        { id: 3, name: "BOOTCUT JEANS", color: "BLACK", },
        { id: 4, name: "FLARED JEANS", color: "LIGHT WASH", image: "100% COTTON" },
        { id: 5, name: "STRAIGHT LEG JEANS", color: "INDIGO", image: "98% COTTON, 2% ELASTANE" },
        { id: 6, name: "BOYFRIEND JEANS", color: "DISTRESSED", image: "100% COTTON" },
        { id: 7, name: "HIGH WAISTED JEANS", color: "WHITE", image: "95% COTTON, 5% ELASTANE" },
        { id: 8, name: "CROPPED JEANS", color: "GRAY", image: "100% COTTON" },
        { id: 9, name: "WIDE LEG JEANS", color: "VINTAGE BLUE", image: "99% COTTON, 1% ELASTANE" },
        { id: 10, name: "JEGGINGS", color: "CHARCOAL", image: "85% COTTON, 15% ELASTANE" }
    ];

    return (
        <>
            <div className="womenwoven-container">
                <h1 className="collection-title">WOMEN'S DENIM PANTS COLLECTION</h1>

                <div className="womenwoven-grid">
                    {denimPants.map((pants) => (
                        <div key={pants.id} className="womenwoven-item">
                            <div className="womenwoven-image-container">
                                <img
                                    src={pants.image || "https://via.placeholder.com/300x400?text=DENIM"}
                                    alt={pants.name}
                                    className="womenwoven-image"
                                />
                            </div>
                            <div className="womenwoven-details">
                                <h3 className="womenwoven-name">{pants.name}</h3>
                                <p className="womenwoven-color">{pants.color}</p>
                                <p className="womenwoven-material">{pants.material}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    className="home-button"
                    onClick={() => navigate('/')}
                >
                    HOME
                </button>
            </div>

            <div className="full-width-footer">
                <Footer />
            </div>
        </>
    );
};

export default Womendenimpant;
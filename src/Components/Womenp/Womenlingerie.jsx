import React from "react";
import { useNavigate } from "react-router-dom";
import "./Womenlingerie.css";
import women_lace_beratte_set from '../Assets/women_lace_beratte_set.png'; // Update with your image path
import Footer from "../Footerr/Footer,jsx";

const Womenlingerie = () => {
    const navigate = useNavigate();

    // Women's lingerie data
    const lingerieItems = [
        { id: 1, name: "Lace Bralette Set", color: "Black", type: "Bra & Panty Set", image: women_lace_beratte_set},
        { id: 2, name: "Silk Chemise", color: "Ivory", type: "Nightwear", image: "https://via.placeholder.com/300x300?text=PushUp+Bra" },
        { id: 3, name: "Push-Up Bra", color: "Nude", type: "Underwire Bra", image: "https://via.placeholder.com/300x300?text=PushUp+Bra" },
        { id: 4, name: "High-Waist Briefs", color: "Burgundy", type: "Panties", image: "https://via.placeholder.com/300x300?text=HighWaist+Briefs" },
        { id: 5, name: "Bodysuit", color: "Navy", type: "Shapewear", image: "https://via.placeholder.com/300x300?text=Bodysuit" },
        { id: 6, name: "Babydoll Set", color: "Blush Pink", type: "Sleepwear Set", image: "https://via.placeholder.com/300x300?text=Babydoll+Set" },
        { id: 7, name: "Sports Bra", color: "Gray", type: "Activewear", image: "https://via.placeholder.com/300x300?text=Sports+Bra" },
        { id: 8, name: "Thong Panties", color: "Red", type: "Underwear", image: "https://via.placeholder.com/300x300?text=Thong" },
        { id: 9, name: "Teddies", color: "Emerald", type: "One-Piece", image: "https://via.placeholder.com/300x300?text=Teddy" },
        { id: 10, name: "Robes", color: "White", type: "Cover-up", image: "https://via.placeholder.com/300x300?text=Robes" }
    ];

    return (
        <>
            <div className="womenlingerie-page">
                <header className="page-header">
                    <h1>Women's Lingerie Collection</h1>
                    <p>Beautiful intimates for every occasion</p>
                </header>

                <div className="lingerie-grid">
                    {lingerieItems.map((item) => (
                        <div key={item.id} className="lingerie-card">
                            <div className="lingerie-image">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="lingerie-info">
                                <h3>{item.name}</h3>
                                <p>Color: {item.color}</p>
                                <p>Type: {item.type}</p>
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

export default Womenlingerie;
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Womenlingerie.css";
import women_lace_beratte_set from '../Assets/women_lace_beratte_set.png'; // Update with your image path
import Footer from "../Footerr/Footer,jsx";
import no2 from '../Women_lingerie/2.png'
import no3 from '../Women_lingerie/3.png'
import no4 from '../Women_lingerie/4.png'
import no5 from '../Women_lingerie/5.png'
import no6 from '../Women_lingerie/6.png'
import no7 from '../Women_lingerie/7.png'
import no8 from '../Women_lingerie/8.png'
import no9 from '../Women_lingerie/9.png'
import no10 from '../Women_lingerie/10.png'
const Womenlingerie = () => {
    const navigate = useNavigate();

    // Women's lingerie data
    const lingerieItems = [
        { id: 1, name: "Lace Bralette Set", color: "Black", type: "Bra & Panty Set", image: women_lace_beratte_set},
        { id: 2, name: "Silk Chemise", color: "Black", type: "Nightwear", image: no2 },
        { id: 3, name: "Push-Up Bra", color: "Nude", type: "Underwire Bra", image: no3 },
        { id: 4, name: "High-Waist Briefs", color: "Burgundy", type: "Panties", image: no4},
        { id: 5, name: "Bodysuit", color: "Navy", type: "Shapewear", image: no5 },
        { id: 6, name: "Babydoll Set", color: "Blush Pink", type: "Sleepwear Set", image: no6 },
        { id: 7, name: "Sports Bra", color: "Gray", type: "Activewear", image: no7},
        { id: 8, name: "Thong Panties", color: "Red", type: "Underwear", image: no8 },
        { id: 9, name: "Teddies", color: "Emerald", type: "One-Piece", image: no9 },
        { id: 10, name: "Robes", color: "White", type: "Cover-up", image: no10 }
    ];

    return (
        <>
        <div className="womenlingerie-page">
            <div className="page-header">
                <h1>LINGERIE COLLECTION</h1>
                <p>Elegant essentials for every day</p>
            </div>

            <div className="lingerie-grid">
                {lingerieItems.map(item => (
                    <div key={item.id} className="lingerie-card">
                        <div className="lingerie-image">
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div className="lingerie-info">
                            <h3>{item.name}</h3>
                            <p>{item.color}</p>
                            <p className="price">{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>


        </div>
            <div className="full-width-footer">
                <Footer />
            </div>
            </>
    );
};

export default Womenlingerie;
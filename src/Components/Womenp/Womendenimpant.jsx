import React from "react";
import { useNavigate } from "react-router-dom";
import "./Womendenimpant.css";
import women_dark_wash_deninmpant from '../Assets/women_dark_wash_deninmpant.png';
import Footer from "../Footerr/Footer,jsx";
import no2 from '../Women_denim_pant/2.png'
import no3 from '../Women_denim_pant/3.png'
import no4 from '../Women_denim_pant/4.png'
import no5 from '../Women_denim_pant/5.png'
import no6 from '../Women_denim_pant/6.png'
import no7 from '../Women_denim_pant/7.png'
import no8 from '../Women_denim_pant/8.png'
import no9 from '../Women_denim_pant/9.png'
import no10 from '../Women_denim_pant/9.png'
const Womendenimpant = () => {
    const navigate = useNavigate();

    const denimPants = [
        { id: 1, name: "SKINNY FIT JEANS", color: "DARK WASH" ,image:  women_dark_wash_deninmpant},
        { id: 2, name: "MOM JEANS", color: "MEDIUM WASH", image: no2 },
        { id: 3, name: "BOOTCUT JEANS", color: "BLACK",image: no3 },
        { id: 4, name: "FLARED JEANS", color: "LIGHT WASH", image: no4 },
        { id: 5, name: "STRAIGHT LEG JEANS", color: "Dark Blue", image: no5 },
        { id: 6, name: "BOYFRIEND JEANS", color: "DISTRESSED", image: no6},
        { id: 7, name: "HIGH WAISTED JEANS", color: "WHITE", image: no7 },
        { id: 8, name: "CROPPED JEANS", color: "GRAY", image:no8 },
        { id: 9, name: "WIDE LEG JEANS", color: "SKY BLUE", image: no9 },
        { id: 10, name: "JEGGINGS", color: "Light Gray", image: no10}
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
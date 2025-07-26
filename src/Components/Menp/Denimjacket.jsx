import React from "react";
import './Denimjacket.css'; // Create this CSS file
import Footer from "../Footerr/Footer,jsx";
import {useNavigate} from "react-router-dom";
import men_denim_jacket1 from '../Assets/Men_denim_jacket.png'
import no1 from '../Men_Denimn_Jacket/1.png'
import no2 from '../Men_Denimn_Jacket/2.png'
import no3 from '../Men_Denimn_Jacket/3.png'
import no4 from '../Men_Denimn_Jacket/4.png'
import no5 from '../Men_Denimn_Jacket/5.png'
import no6 from '../Men_Denimn_Jacket/6.png'
import no7 from '../Men_Denimn_Jacket/7.png'
import no8 from '../Men_Denimn_Jacket/8.png'
import no9 from '../Men_Denimn_Jacket/9.png'
import no10 from '../Men_Denimn_Jacket/10.png'
const Denimjacket = () => {
    const navigate = useNavigate();
    // 10 Men's Denim Jacket Samples
    const denimJackets = [
        {
            id: 1,
            name: 'Classic Blue Denim Jacket',
            description: 'Timeless medium wash with metal buttons',
            image: no1
        },
        {
            id: 2,
            name: 'Black Denim Jacket',
            description: 'Slim-fit black denim with matte finish',
            image: no2
        },
        {
            id: 3,
            name: 'Vintage Washed Jacket',
            description: 'Distressed finish with authentic wear patterns',
            image: no3
        },
        {
            id: 4,
            name: 'Oversized Denim Jacket',
            description: 'Relaxed fit with dropped shoulders',
            image: no4
        },
        {
            id: 5,
            name: 'Sherpa-Lined Jacket',
            description: 'Warm fleece lining for cold weather',
            image: no5
        },
        {
            id: 6,
            name: 'Light Wash Denim Jacket',
            description: 'Summer-weight with faded finish',
            image: no6
        },
        {
            id: 7,
            name: 'Biker Denim Jacket',
            description: 'Asymmetric zip with snap-button cuffs',
            image: no7
        },
        {
            id: 8,
            name: 'Embroidered Denim Jacket',
            description: 'Floral embroidery on back panel',
            image: no8
        },
        {
            id: 9,
            name: 'Cropped Denim Jacket',
            description: 'Modern short length with raw hem',
            image: no9
        },
        {
            id: 10,
            name: 'Selvedge Denim Jacket',
            description: 'Premium Japanese selvedge denim',
            image: no10
        }
    ];

    return (
        <>
        <div className="denimjacket-container">
            <header className="denimjacket-header">
                <h1>Men's Denim Jackets</h1>
                <p>Timeless styles for every wardrobe</p>
            </header>

            <div className="jacket-grid">
                {denimJackets.map((jacket) => (
                    <div key={jacket.id} className="jacket-card">
                        <div className="jacket-image">
                            <img
                                src={jacket.image}
                                alt={jacket.name}
                                loading="lazy"
                            />
                        </div>
                        <div className="jacket-details">
                            <h3>{jacket.name}</h3>
                            <p>{jacket.description}</p>
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

export default Denimjacket;
import React from "react";
import './Denimjacket.css'; // Create this CSS file
import Footer from "../Footerr/Footer,jsx";
import {useNavigate} from "react-router-dom";
import men_denim_jacket1 from '../Assets/Men_denim_jacket.png'
const Denimjacket = () => {
    const navigate = useNavigate();
    // 10 Men's Denim Jacket Samples
    const denimJackets = [
        {
            id: 1,
            name: 'Classic Blue Denim Jacket',
            description: 'Timeless medium wash with metal buttons',
            image: men_denim_jacket1
        },
        {
            id: 2,
            name: 'Black Denim Jacket',
            description: 'Slim-fit black denim with matte finish',
            image: 'https://via.placeholder.com/300x300?text=Black+Denim'
        },
        {
            id: 3,
            name: 'Vintage Washed Jacket',
            description: 'Distressed finish with authentic wear patterns',
            image: 'https://via.placeholder.com/300x300?text=Vintage+Wash'
        },
        {
            id: 4,
            name: 'Oversized Denim Jacket',
            description: 'Relaxed fit with dropped shoulders',
            image: 'https://via.placeholder.com/300x300?text=Oversized'
        },
        {
            id: 5,
            name: 'Sherpa-Lined Jacket',
            description: 'Warm fleece lining for cold weather',
            image: 'https://via.placeholder.com/300x300?text=Sherpa+Lined'
        },
        {
            id: 6,
            name: 'Light Wash Denim Jacket',
            description: 'Summer-weight with faded finish',
            image: 'https://via.placeholder.com/300x300?text=Light+Wash'
        },
        {
            id: 7,
            name: 'Biker Denim Jacket',
            description: 'Asymmetric zip with snap-button cuffs',
            image: 'https://via.placeholder.com/300x300?text=Biker+Style'
        },
        {
            id: 8,
            name: 'Embroidered Denim Jacket',
            description: 'Floral embroidery on back panel',
            image: 'https://via.placeholder.com/300x300?text=Embroidered'
        },
        {
            id: 9,
            name: 'Cropped Denim Jacket',
            description: 'Modern short length with raw hem',
            image: 'https://via.placeholder.com/300x300?text=Cropped'
        },
        {
            id: 10,
            name: 'Selvedge Denim Jacket',
            description: 'Premium Japanese selvedge denim',
            image: 'https://via.placeholder.com/300x300?text=Selvedge'
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
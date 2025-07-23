import React from "react";
import './Menlengerie.css'; // Create this CSS file
import Footer from "../Footerr/Footer,jsx";
import {useNavigate} from "react-router-dom";
import men_lingerie_micromodal from '../Assets/Men_lingerie_micromodal.png'
const Men_lingerie = () => {
    const navigate = useNavigate();
    const underwear = [
        {
            id: 1,
            name: 'MicroModal Boxer Briefs',
            description: 'Breathable fabric with ergonomic pouch',
            image: men_lingerie_micromodal
        },
        {
            id: 2,
            name: 'Sport Performance Trunks',
            description: 'Moisture-wicking with anti-odor technology',
            image: 'https://via.placeholder.com/300x300?text=Sport+Trunks'
        },
        {
            id: 3,
            name: 'Classic Cotton Briefs',
            description: '100% organic cotton with tagless design',
            image: 'https://via.placeholder.com/300x300?text=Cotton+Briefs'
        },
        {
            id: 4,
            name: 'Seamless Hipster',
            description: 'Invisible under clothing with 4-way stretch',
            image: 'https://via.placeholder.com/300x300?text=Seamless'
        },
        {
            id: 5,
            name: 'Luxury Silk Boxers',
            description: 'Charmeuse silk with adjustable waistband',
            image: 'https://via.placeholder.com/300x300?text=Silk+Boxers'
        }
    ];

    return (
        <>
        <div className="underwear-container">
            <h2>Premium Men's Underwear</h2>
            <div className="underwear-grid">
                {underwear.map(item => (
                    <div key={item.id} className="underwear-card">
                        <img
                            src={item.image}
                            alt={item.name}
                            loading="lazy"
                        />
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
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

export default Men_lingerie;
import React from "react";
import './Menwoven.css'; // We'll create this CSS file
import Footer from "../Footerr/Footer,jsx";
import men_woven_camp from '../Assets/men_woven_camp_shirt.png'
import {useNavigate} from "react-router-dom";
const Menwoven = () => {
    const navigate = useNavigate();
    // 15 Men's Woven Items
    const wovenItems = [
        {
            id: 1,
            name: 'Linen Camp Shirt',
            description: 'Breathable 100% linen summer shirt',
            image: men_woven_camp
        },
        {
            id: 2,
            name: 'Chambray Workshirt',
            description: 'Durable cotton chambray workshirt',
            image: 'https://via.placeholder.com/300x300?text=Chambray+Shirt'
        },
        {
            id: 3,
            name: 'Denim Western Shirt',
            description: 'Classic denim shirt with pearl snaps',
            image: 'https://via.placeholder.com/300x300?text=Denim+Shirt'
        },
        {
            id: 4,
            name: 'Seersucker Shirt',
            description: 'Lightweight puckered cotton shirt',
            image: 'https://via.placeholder.com/300x300?text=Seersucker+Shirt'
        },
        {
            id: 5,
            name: 'Oxford Button-Down',
            description: 'Crisp cotton oxford dress shirt',
            image: 'https://via.placeholder.com/300x300?text=Oxford+Shirt'
        },
        {
            id: 6,
            name: 'Herringbone Tunic',
            description: 'Wool-blend herringbone pattern tunic',
            image: 'https://via.placeholder.com/300x300?text=Herringbone+Tunic'
        },
        {
            id: 7,
            name: 'Kurta (White)',
            description: 'Traditional Indian cotton kurta',
            image: 'https://via.placeholder.com/300x300?text=White+Kurta'
        },
        {
            id: 8,
            name: 'Kurta (Indigo)',
            description: 'Hand-block printed indigo kurta',
            image: 'https://via.placeholder.com/300x300?text=Indigo+Kurta'
        },
        {
            id: 9,
            name: 'Barong Tagalog',
            description: 'Filipino formal embroidered shirt',
            image: 'https://via.placeholder.com/300x300?text=Barong+Tagalog'
        },
        {
            id: 10,
            name: 'Guayabera Shirt',
            description: 'Cuban-style pleated linen shirt',
            image: 'https://via.placeholder.com/300x300?text=Guayabera'
        },
        {
            id: 11,
            name: 'Kaftan (Black)',
            description: 'Moroccan-inspired woven kaftan',
            image: 'https://via.placeholder.com/300x300?text=Black+Kaftan'
        },
        {
            id: 12,
            name: 'Kaftan (Ivory)',
            description: 'Lightweight ivory ceremonial kaftan',
            image: 'https://via.placeholder.com/300x300?text=Ivory+Kaftan'
        },
        {
            id: 13,
            name: 'Band Collar Shirt',
            description: 'Modern Mandarin collar shirt',
            image: 'https://via.placeholder.com/300x300?text=Band+Collar'
        },
        {
            id: 14,
            name: 'Twill Overshirt',
            description: 'Structured cotton-twill overshirt',
            image: 'https://via.placeholder.com/300x300?text=Twill+Overshirt'
        },
        {
            id: 15,
            name: 'Jacquard Shirt',
            description: 'Ornate woven jacquard pattern shirt',
            image: 'https://via.placeholder.com/300x300?text=Jacquard+Shirt'
        }
    ];

    return (
        <>
            <div className="menwoven-container">
            <header className="menwoven-header">
                <h1>Men's Woven Collection</h1>
                <p>Traditional and contemporary woven garments</p>
            </header>

            <div className="woven-grid">
                {wovenItems.map((item) => (
                    <div key={item.id} className="woven-item">
                        <div className="woven-image">
                            <img
                                src={item.image}
                                alt={item.name}
                                loading="lazy"
                            />
                        </div>
                        <div className="woven-details">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
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

export default Menwoven;
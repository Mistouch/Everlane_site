import React from "react";
import './Menwoven.css'; // We'll create this CSS file
import Footer from "../Footerr/Footer,jsx";
import no1 from '../Men_woven/1.png'
import no2 from '../Men_woven/2.png'
import no3 from '../Men_woven/3.png'
import no4 from '../Men_woven/4.png'
import no5 from '../Men_woven/5.png'
import no6 from '../Men_woven/6.png'
import no7 from '../Men_woven/7.png'
import no10 from '../Men_woven/10.png'
import no13 from '../Men_woven/13.png'
import no14 from '../Men_woven/14.png'
import no15 from '../Men_woven/15.png'
import no9 from '../Men_woven/9.png'
import {useNavigate} from "react-router-dom";
const Menwoven = () => {
    const navigate = useNavigate();
    // 15 Men's Woven Items
    const wovenItems = [
        {
            id: 1,
            name: 'Linen Camp Shirt',
            description: 'Breathable 100% linen summer shirt',
            image:no1
        },
        {
            id: 2,
            name: 'Chambray Workshirt',
            description: 'Durable cotton chambray workshirt',
            image: no2
        },
        {
            id: 3,
            name: 'Denim Western Shirt',
            description: 'Classic denim shirt with pearl snaps',
            image: no3
        },
        {
            id: 4,
            name: 'Seersucker Shirt',
            description: 'Lightweight puckered cotton shirt',
            image: no4
        },
        {
            id: 5,
            name: 'Oxford Button-Down',
            description: 'Crisp cotton oxford dress shirt',
            image: no5
        },
        {
            id: 6,
            name: 'Herringbone Tunic',
            description: 'Wool-blend herringbone pattern tunic',
            image: no6
        },
        {
            id: 7,
            name: 'Loom & Line',
            description: 'Timeless weave, modern style.',
            image: no7
        },

        {
            id: 9,
            name: 'Barong Tagalog',
            description: 'Filipino formal embroidered shirt',
            image: no9
        },
        {
            id: 10,
            name: 'Guayabera Shirt',
            description: 'Cuban-style pleated linen shirt',
            image: no10
        },

        {
            id: 13,
            name: 'Band Collar Shirt',
            description: 'Modern Mandarin collar shirt',
            image: no13
        },
        {
            id: 14,
            name: 'Twill Overshirt',
            description: 'Structured cotton-twill overshirt',
            image: no14
        },
        {
            id: 15,
            name: 'Jacquard Shirt',
            description: 'Ornate woven jacquard pattern shirt',
            image: no15
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
import React from "react";
import './Denimpant.css';
import Footer from "../Footerr/Footer,jsx";
import {useNavigate} from "react-router-dom";
import men_denim_pant from '../Assets/Men_Denim_pant.png'
import no2 from '../Men_Denim_Pant/2.png'
import no3 from '../Men_Denim_Pant/3.png'
import no4 from '../Men_Denim_Pant/4.png'
import no5 from '../Men_Denim_Pant/5.png'
import no6 from '../Men_Denim_Pant/6.png'
import no7 from '../Men_Denim_Pant/7.png'
import no8 from '../Men_Denim_Pant/8.png'
import no10 from '../Men_Denim_Pant/10.png'
import no11 from '../Men_Denim_Pant/11.png'
import no12 from '../Men_Denim_Pant/12.png'
import no13 from '../Men_Denim_Pant/13.png'
import no14 from '../Men_Denim_Pant/14.png'
const Denimpant = () => {
    const navigate = useNavigate();
    // 15 Men's Denim Pants Samples
    const denimPants = [
        {
            id: 1,
            name: 'Classic Straight Fit',
            description: 'Mid-blue 100% cotton denim with regular fit',
            image:men_denim_pant
        },
        {
            id: 2,
            name: 'Slim Fit Jeans',
            description: 'Stretch denim with tapered leg',
            image: no2
        },
        {
            id: 3,
            name: 'Relaxed Fit',
            description: 'Comfortable loose fit with reinforced stitching',
            image: no3
        },
        {
            id: 4,
            name: 'Black Denim',
            description: 'Jet-black washed denim with slim straight cut',
            image: no4
        },
        {
            id: 5,
            name: 'Vintage Wash',
            description: 'Light distressed finish with authentic wear patterns',
            image: no5
        },
        {
            id: 6,
            name: 'Dark Indigo',
            description: 'Deep indigo rigid denim with classic fit',
            image: no6
        },
        {
            id: 7,
            name: 'Carpenter Jeans',
            description: 'Utility style with tool pockets and reinforced knees',
            image: no7
        },
        {
            id: 8,
            name: 'Selvedge Denim',
            description: 'Premium Japanese selvedge with raw finish',
            image: no8
        },

        {
            id: 10,
            name: 'Patchwork Denim',
            description: 'Upcycled denim with unique patch designs',
            image: no10
        },
        {
            id: 11,
            name: 'Wide Leg',
            description: '90s inspired wide leg silhouette',
            image: no11
        },
        {
            id: 13,
            name: 'Eco-Washed',
            description: 'Environmentally friendly laser finishing',
            image: no13
        },
        {
            id: 14,
            name: 'Biker Jeans',
            description: 'Reinforced seams and articulated knees',
            image: no14
        }

    ];

    return (
        <>
        <div className="denim-container">
            <header className="denim-header">
                <h1>Men's Denim Collection</h1>
                <p>Premium jeans for every style and occasion</p>
            </header>

            <div className="denim-grid">
                {denimPants.map((pant) => (
                    <div key={pant.id} className="denim-card">
                        <div className="denim-image">
                            <img
                                src={pant.image}
                                alt={pant.name}
                                loading="lazy"
                            />
                        </div>
                        <div className="denim-details">
                            <h3>{pant.name}</h3>
                            <p>{pant.description}</p>
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

export default Denimpant;
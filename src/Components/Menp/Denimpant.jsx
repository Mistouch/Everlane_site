import React from "react";
import './Denimpant.css';
import Footer from "../Footerr/Footer,jsx";
import {useNavigate} from "react-router-dom";
import men_denim_pant from '../Assets/Men_Denim_pant.png'
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
            image: 'https://via.placeholder.com/300x300?text=Slim+Fit'
        },
        {
            id: 3,
            name: 'Relaxed Fit',
            description: 'Comfortable loose fit with reinforced stitching',
            image: 'https://via.placeholder.com/300x300?text=Relaxed+Fit'
        },
        {
            id: 4,
            name: 'Black Denim',
            description: 'Jet-black washed denim with slim straight cut',
            image: 'https://via.placeholder.com/300x300?text=Black+Denim'
        },
        {
            id: 5,
            name: 'Vintage Wash',
            description: 'Light distressed finish with authentic wear patterns',
            image: 'https://via.placeholder.com/300x300?text=Vintage+Wash'
        },
        {
            id: 6,
            name: 'Dark Indigo',
            description: 'Deep indigo rigid denim with classic fit',
            image: 'https://via.placeholder.com/300x300?text=Dark+Indigo'
        },
        {
            id: 7,
            name: 'Carpenter Jeans',
            description: 'Utility style with tool pockets and reinforced knees',
            image: 'https://via.placeholder.com/300x300?text=Carpenter'
        },
        {
            id: 8,
            name: 'Selvedge Denim',
            description: 'Premium Japanese selvedge with raw finish',
            image: 'https://via.placeholder.com/300x300?text=Selvedge'
        },
        {
            id: 9,
            name: 'Athletic Fit',
            description: 'Extra room in thigh with tapered leg opening',
            image: 'https://via.placeholder.com/300x300?text=Athletic+Fit'
        },
        {
            id: 10,
            name: 'Patchwork Denim',
            description: 'Upcycled denim with unique patch designs',
            image: 'https://via.placeholder.com/300x300?text=Patchwork'
        },
        {
            id: 11,
            name: 'Wide Leg',
            description: '90s inspired wide leg silhouette',
            image: 'https://via.placeholder.com/300x300?text=Wide+Leg'
        },
        {
            id: 12,
            name: 'Cropped Denim',
            description: 'Ankle-length cut with raw hem',
            image: 'https://via.placeholder.com/300x300?text=Cropped'
        },
        {
            id: 13,
            name: 'Eco-Washed',
            description: 'Environmentally friendly laser finishing',
            image: 'https://via.placeholder.com/300x300?text=Eco+Washed'
        },
        {
            id: 14,
            name: 'Biker Jeans',
            description: 'Reinforced seams and articulated knees',
            image: 'https://via.placeholder.com/300x300?text=Biker+Jeans'
        },
        {
            id: 15,
            name: 'Overdyed Black',
            description: 'Double-dyed for deep color retention',
            image: 'https://via.placeholder.com/300x300?text=Overdyed'
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
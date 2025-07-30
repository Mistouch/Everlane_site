import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cosmetics.css';
import Footer from "../Footerr/Footer,jsx";

import no1 from '../Women_Cosmetics/1.png'
import no2 from '../Women_Cosmetics/2.png'
import no3 from '../Women_Cosmetics/3.png'
import no4 from '../Women_Cosmetics/4.png'
import no5 from '../Women_Cosmetics/5.png'
import no6 from '../Women_Cosmetics/6.png'
import no7 from '../Women_Cosmetics/7.png'
import no8 from '../Women_Cosmetics/8.png'
import no10 from '../Women_Cosmetics/10.png'
import no12 from '../Women_Cosmetics/12.png'
import no14 from '../Women_Cosmetics/14.png'
import no15 from '../Women_Cosmetics/15.png'
const Cosmetics = () => {
    const navigate = useNavigate();

    // 20 Cosmetic Products (without prices)
    const cosmeticsItems = [
        { id: 1, name: 'MATTE LIPSTICK', brand: 'BEAUTYGLOW', image: no1 },
        { id: 2, name: 'HYDRATING FOUNDATION', brand: 'SKINPERFECT', image: no2},
        { id: 3, name: 'VOLUME MASCARA', brand: 'LASHQUEEN', image: no3},
        { id: 4, name: 'BLUSH PALETTE', brand: 'CHEEKY', image: no4 },
        { id: 5, name: 'EYESHADOW PALETTE', brand: 'COLORPOP', image: no5 },
        { id: 6, name: 'HIGHLIGHTER STICK', brand: 'GLOWUP', image: no6},
        { id: 7, name: 'LIQUID EYELINER', brand: 'PRECISIONLINE', image: no7 },
        { id: 8, name: 'SETTING SPRAY', brand: 'FIXIT', image: no8},
        { id: 10, name: 'BROW PENCIL', brand: 'ARCHIT', image: no10},
        { id: 12, name: 'LIP GLOSS SET', brand: 'SHINEON', image: no12},
        { id: 14, name: 'BRONZER', brand: 'SUNKISSED', image: no14 },
        { id: 20, name: 'LIP LINER', brand: 'DEFINEIT', image: no15 }
    ];

    return (
        <>
        <div className="cosmetics-page">
            <header className="cosmetics-header">
                <h1>COSMETICS</h1>
                <p>Premium beauty essentials</p>
            </header>

            <div className="cosmetics-grid">
                {cosmeticsItems.map((product) => (
                    <div key={product.id} className="cosmetic-card">
                        <div className="cosmetic-image-container">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="cosmetic-image"
                                loading="lazy"
                            />
                            <span className="product-rating">{product.rating}</span>
                        </div>
                        <div className="cosmetic-details">
                            <h3>{product.name}</h3>
                            <p className="brand-name">{product.brand}</p>
                        </div>
                    </div>
                ))}
            </div>


        </div>
            <Footer />
            </>
    );
};

export default Cosmetics;
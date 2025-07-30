
import React from "react";
import { useNavigate } from "react-router-dom";
import './Denimjacket.css';
import Footer from "../Footerr/Footer,jsx";
import no1 from '../Men_Denimn_Jacket/1.png';
import no2 from '../Men_Denimn_Jacket/2.png';
import no3 from '../Men_Denimn_Jacket/3.png';
import no4 from '../Men_Denimn_Jacket/4.png';
import no5 from '../Men_Denimn_Jacket/5.png';
import no6 from '../Men_Denimn_Jacket/6.png';
import no7 from '../Men_Denimn_Jacket/7.png';
import no8 from '../Men_Denimn_Jacket/8.png';
import no9 from '../Men_Denimn_Jacket/9.png';
import no10 from '../Men_Denimn_Jacket/10.png';

const Denimjacket = () => {
    const navigate = useNavigate();

    const denimJackets = [
        {
            id: 1,
            name: 'CLASSIC BLUE DENIM',
            details: 'Medium wash | Metal buttons',
            price: '$79.99',
            image: no1
        },
        {
            id: 2,
            name: 'BLACK DENIM',
            details: 'Slim-fit | Matte finish',
            price: '$89.99',
            image: no2
        },
        {
            id: 3,
            name: 'VINTAGE WASHED',
            details: 'Distressed | Authentic wear',
            price: '$99.99',
            image: no3
        },
        {
            id: 4,
            name: 'OVERSIZED FIT',
            details: 'Relaxed | Dropped shoulders',
            price: '$84.99',
            image: no4
        },
        {
            id: 5,
            name: 'SHERPA-LINED',
            details: 'Fleece lining | Cold weather',
            price: '$109.99',
            image: no5
        },
        {
            id: 6,
            name: 'LIGHT WASH',
            details: 'Summer-weight | Faded',
            price: '$74.99',
            image: no6
        },
        {
            id: 7,
            name: 'BIKER STYLE',
            details: 'Asymmetric zip | Snap cuffs',
            price: '$119.99',
            image: no7
        },
        {
            id: 8,
            name: 'EMBROIDERED',
            details: 'Floral details | Back panel',
            price: '$129.99',
            image: no8
        },
        {
            id: 9,
            name: 'CROPPED FIT',
            details: 'Short length | Raw hem',
            price: '$89.99',
            image: no9
        },
        {
            id: 10,
            name: 'SELVEDGE DENIM',
            details: 'Japanese | Premium quality',
            price: '$199.99',
            image: no10
        }
    ];

    return (
        <>
            <div className="mendenimjacket-container">
                <h2 className="collection-title">MAN'S DENIM JACKETS</h2>
                <div className="mendenimjacket-grid">
                    {denimJackets.map((jacket) => (
                        <div key={jacket.id} className="mendenimjacket-item">
                            <div className="mendenimjacket-image-container">
                                <img
                                    src={jacket.image}
                                    alt={jacket.name}
                                    className="mendenimjacket-image"
                                />
                            </div>
                            <div className="mendenimjacket-details">
                                <h3 className="mendenimjacket-name">{jacket.name}</h3>
                                <p className="mendenimjacket-color">{jacket.details}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="full-width-footer">
                <Footer />
            </div>
        </>
    );;
};

export default Denimjacket;
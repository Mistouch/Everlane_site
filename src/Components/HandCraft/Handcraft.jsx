import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Handcraft.css';
import Footer from "../Footerr/Footer,jsx";
import plate from '../Assets/jute_plate.png';
import busket from '../Assets/jute_busket.png';
import no3 from '../Handcrfact_prod/3.png'
import no4 from '../Handcrfact_prod/4.png'
import no5 from '../Handcrfact_prod/5.png'
import no6 from '../Handcrfact_prod/6.png'
import no7 from '../Handcrfact_prod/7.png'
import no8 from '../Handcrfact_prod/8.png'
import no9 from '../Handcrfact_prod/9.png'
import no11 from '../Handcrfact_prod/11.png'
import no12 from '../Handcrfact_prod/12.png'
import no13 from '../Handcrfact_prod/13.png'
import no14 from '../Handcrfact_prod/14.png'
import no15 from '../Handcrfact_prod/15.png'
const Handcraft = () => {
    const navigate = useNavigate();

    // 15 Traditional Jute Products (English only)
    const juteProducts = [
        {
            id: 1,
            name: 'Jute Plate',
            description: 'Handwoven traditional jute plate',
            image: plate
        },
        {
            id: 2,
            name: 'Jute Basket',
            description: 'Traditional style jute basket',
            image: busket
        },
        {
            id: 3,
            name: 'Jute Wallmat',
            description: 'Jute-made wall decoration',
            image:no3
        },
        {
            id: 4,
            name: 'Jute Hat',
            description: 'Traditional jute hat',
            image: no4
        },
        {
            id: 5,
            name: 'Jute Bag',
            description: 'Eco-friendly jute shopping bag',
            image: no5
        },
        {
            id: 6,
            name: 'Jute Footmat',
            description: 'Jute-made foot mat',
            image: no6
        },
        {
            id: 7,
            name: 'Jute Curtain',
            description: 'Handwoven jute thread curtain',
            image: no7
        },
        {
            id: 8,
            name: 'Jute Flowerpot',
            description: 'Jute-made flower vase',
            image: no8
        },
        {
            id: 9,
            name: 'Jute Tablemat',
            description: 'Jute-made table decoration mat',
            image: no9
        },
        {
            id: 11,
            name: 'Jute Pen Holder',
            description: 'Jute-made pen holder',
            image: no11
        },
        {
            id: 12,
            name: 'Jute Bookmark',
            description: 'Bookmark made from jute thread',
            image: no12
        },
        {
            id: 13,
            name: 'Jute Photo Frame',
            description: 'Jute-made photo frame',
            image: no13
        },
        {
            id: 14,
            name: 'Jute Tray',
            description: 'Jute-made serving tray',
            image: no14
        },
        {
            id: 15,
            name: 'Jute Sandals',
            description: 'Comfortable jute-made sandals',
            image: no15
        }
    ];

    return (
        <>
        <div className="handcraft-page">
            <header className="page-header">
                <h1 className="collection-title">JUTE CRAFTS</h1>
                <p className="collection-count">{juteProducts.length} ITEMS</p>
            </header>

            <div className="products-grid">
                {juteProducts.map((product) => (
                    <div key={product.id} className="product-card">
                        <div className="product-image-container">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="product-image"
                                onError={(e) => {
                                    e.target.src = "https://via.placeholder.com/300x300?text=Image+Not+Found";
                                }}
                            />
                        </div>
                        <div className="product-info">
                            <h3 className="product-name">{product.name}</h3>
                            <p className="product-description">{product.description}</p>
                            <p className="product-price">{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    <Footer />
    </>
    );
};

export default Handcraft;
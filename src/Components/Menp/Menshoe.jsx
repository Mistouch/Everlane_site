import React from "react";
import { useNavigate } from "react-router-dom";
import './Menshoe.css';

import no1 from '../Men_shoe/1.png'
import no2 from '../Men_shoe/2.png'
import no3 from '../Men_shoe/3.png'
import no4 from '../Men_shoe/4.png'
import no5 from '../Men_shoe/5.png'
import no6 from '../Men_shoe/6.png'
import no7 from '../Men_shoe/7.png'
import no8 from '../Men_shoe/8.png'
import no9 from '../Men_shoe/9.png'
import no10 from '../Men_shoe/10.png'
const Menshoe = () => {
    const navigate = useNavigate();

    // 10 Men's Shoes
    const shoes = [
        {
            id: 1,
            name: 'Leather Derby Shoes',
            color: 'Black',
            image: no1
        },
        {
            id: 2,
            name: 'White Sneakers',
            color: 'White',
            image: no2
        },
        {
            id: 3,
            name: 'Chelsea Boots',
            color: 'Brown',
            image: no3
        },
        {
            id: 4,
            name: 'Running Shoes',
            color: 'Black/White',
            image: no4
        },
        {
            id: 5,
            name: 'Loafers',
            color: 'Burgundy',
            image: no5
        },

        {
            id: 7,
            name: 'Oxford Shoes',
            color: 'Dark Brown',
            image: no7
        },
        {
            id: 8,
            name: 'Slip-On Sneakers',
            color: 'Grey',
            image: no8
        },
        {
            id: 6,
            name: 'High-Top Sneakers',
            color: 'Black',
            image: no6
        },
        {
            id: 9,
            name: 'Desert Boots',
            color: 'Tan',
            image: no9
        },
        {
            id: 10,
            name: 'Leather Sandals',
            color: 'Black',
            image: no10
        }
    ];

    return (
        <div className="menshoe-page">
            <div className="collection-header">
                <h1>MEN'S SHOES</h1>
                <p>Contemporary designs with premium craftsmanship</p>
                <div className="header-divider"></div>
            </div>

            <div className="shoe-container">
                {shoes.map((shoe) => (
                    <div
                        key={shoe.id}
                        className="shoe-item"
                       // onClick={() => navigate(`/product/shoes/${shoe.id}`)}
                    >
                        <div className="shoe-image-wrapper">
                            <img
                                src={shoe.image}
                                alt={shoe.name}
                                className="shoe-img"
                                loading="lazy"
                            />
                        </div>
                        <div className="shoe-details">
                            <h3>{shoe.name}</h3>
                            <p className="shoe-color">{shoe.color}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menshoe;
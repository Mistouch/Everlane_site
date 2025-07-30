import React from "react";
import { useNavigate } from "react-router-dom";
import './Womenshoe.css';
import Footer from "../Footerr/Footer,jsx";
import no1 from '../Women_shoe/1.png';
import no2 from '../Women_shoe/2.png';
import no3 from '../Women_shoe/3.png';
import no4 from '../Women_shoe/4.png';
import no5 from '../Women_shoe/5.png';
import no6 from '../Women_shoe/6.png';
import no7 from '../Women_shoe/7.png';
import no8 from '../Women_shoe/8.png';
import no9 from '../Women_shoe/9.png';
import no10 from '../Women_shoe/10.png';
import no11  from '../Women_shoe/11.png';
import no12 from '../Women_shoe/12.png';
const Womenshoe = () => {
    const navigate = useNavigate();

    const shoes = [
        {
            id: 1,
            name: 'Leather ankle boots',
            color: 'Black',
            image: no1
        },
        {
            id: 2,
            name: 'Stiletto pumps',
            color: 'Navy blue',
            image: no2
        },
        {
            id: 3,
            name: 'White sneakers',
            color: 'White',
            image: no3
        },
        {
            id: 4,
            name: 'Tassel loafers',
            color: 'Brown',
            image: no4
        },
        {
            id: 5,
            name: 'Slide sandals',
            color: 'Tan',
            image: no5
        },
        {
            id: 6,
            name: 'Combat boots',
            color: 'Black',
            image: no6
        },
        {
            id: 7,
            name: 'Ballet flats',
            color: 'Blush pink',
            image: no7
        },
        {
            id: 8,
            name: 'Open-back mules',
            color: 'Cream',
            image: no8
        },
        {
            id: 9,
            name: 'Wedge sandals',
            color: 'Natural',
            image: no9
        },
        {
            id: 10,
            name: 'Chunky sneakers',
            color: 'White',
            image: no10
        },
        {
            id: 11,
            name: 'Pointed flats',
            color: 'Metallic gold',
            image: no11
        },
        {
            id: 12,
            name: 'Knee high boots',
            color: 'Black',
            image: no12
        }
    ];

    return (
        <>
        <div className="womenshoe-page">
            <div className="collection-header">
                <h1>WOMEN'S SHOES</h1>
                <p>Contemporary designs with premium craftsmanship</p>
            </div>

            <div className="shoe-container">
                {shoes.map((shoe) => (
                    <div
                        key={shoe.id}
                        className="shoe-item"
                    >
                        <div className="shoe-image-wrapper">
                            <img
                                src={shoe.image}
                                alt={shoe.name}
                                className="shoe-img"
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/300x400?text=Shoe+Image';
                                }}
                            />
                        </div>
                        <div className="shoe-details">
                            <h3>{shoe.name}</h3>
                            <p className="shoe-color">{shoe.color}</p>
                            <p className="shoe-price">{shoe.price}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
            </>
    );
};

export default Womenshoe;
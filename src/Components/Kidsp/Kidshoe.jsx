import React from "react";
import { useNavigate } from "react-router-dom";
import "./Kidhshoe.css"
import kid1 from '../Kid_Shoe/1.png'
import kid2 from '../Kid_Shoe/2.png'
import kid3 from '../Kid_Shoe/3.png'
import kid4 from '../Kid_Shoe/4.png'
import kid5 from '../Kid_Shoe/5.png'
import kid6 from '../Kid_Shoe/6.png'
import kid7 from '../Kid_Shoe/7.png'
import kid8 from '../Kid_Shoe/8.png'
import kid9 from '../Kid_Shoe/9.png'
import kid10 from '../Kid_Shoe/10.png'
const Kidshoe = () => {
    const navigate = useNavigate();

    const shoes = [
        {
            id: 1,
            name: 'Canvas Sneakers',
            color: 'Blue/White',
            image: kid1
        },
        {
            id: 2,
            name: 'Water Play Sandals',
            color: 'Red',
            image: kid2
        },
        {
            id: 3,
            name: 'Classic Boot',
            color: 'Black',
            image: kid3
        },
        {
            id: 4,
            name: 'School Shoes',
            color: 'Black',
            image: kid4
        },
        {
            id: 5,
            name: 'Water Shoes',
            color: 'Neon Green',
            image: kid5
        },
        {
            id: 6,
            name: 'Winter Boots',
            color: 'Pink',
            image: kid6
        },
        {
            id: 7,
            name: 'Character Sneakers',
            color: 'Multicolor',
            image: kid7
        },
        {
            id: 8,
            name: 'Slip-On Loafers',
            color: 'Brown',
            image: kid8
        },
        {
            id: 9,
            name: 'Sports Shoes',
            color: 'Black/Red',
            image: kid9
        },
        {
            id: 10,
            name: 'Jelly Sandals',
            color: 'Clear',
            image: kid10
        }
    ];

    return (
        <div className="kidshoe-page">
            <div className="collection-header">
                <h1>KIDS' SHOES</h1>
                <div className="header-divider"></div>
            </div>

            <div className="shoe-container">
                {shoes.map((shoe) => (
                    <div
                        key={shoe.id}
                        className="shoe-item"
                        //onClick={() => navigate(`/product/kids-shoes/${shoe.id}`)}
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

export default Kidshoe;
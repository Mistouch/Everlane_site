import react from "react";
import Footer from "../Footerr/Footer,jsx";
import men_chew from '../Assets/men_chewneak_sweater.png';
import './Mensweater.css'
import React from "react";
import {useNavigate} from "react-router-dom";
const Men_sweater = () => {
    const navigate = useNavigate();
    const sweaters = [
        {
            id: 16,
            name: 'Crewneck Sweater',
            description: 'Classic wool blend crewneck sweater',
            image: men_chew
        },
        {
            id: 17,
            name: 'V-Neck Sweater',
            description: 'Lightweight merino wool v-neck',
            image: 'https://via.placeholder.com/300x300?text=Men+Sweater+2'
        },
        {
            id: 18,
            name: 'Turtleneck Sweater',
            description: 'Warm cashmere blend turtleneck',
            image: 'https://via.placeholder.com/300x300?text=Men+Sweater+3'
        },
        {
            id: 19,
            name: 'Cardigan Sweater',
            description: 'Button-front cardigan with pockets',
            image: 'https://via.placeholder.com/300x300?text=Men+Sweater+4'
        },
        {
            id: 20,
            name: 'Cable Knit Sweater',
            description: 'Traditional cable knit pattern sweater',
            image: 'https://via.placeholder.com/300x300?text=Men+Sweater+5'
        },
        {
            id: 21,
            name: 'Quarter-Zip Sweater',
            description: 'Performance wool quarter-zip pullover',
            image: 'https://via.placeholder.com/300x300?text=Men+Sweater+6'
        },
        {
            id: 22,
            name: 'Shawl Collar Sweater',
            description: 'Luxurious shawl collar cardigan',
            image: 'https://via.placeholder.com/300x300?text=Men+Sweater+7'
        },
        {
            id: 23,
            name: 'Fisherman Sweater',
            description: 'Chunky knit fisherman sweater',
            image: 'https://via.placeholder.com/300x300?text=Men+Sweater+8'
        },
        {
            id: 24,
            name: 'Cashmere Crewneck',
            description: '100% pure cashmere crewneck',
            image: 'https://via.placeholder.com/300x300?text=Men+Sweater+9'
        },
        {
            id: 25,
            name: 'Wool Blend Hoodie',
            description: 'Warm wool blend hooded sweater',
            image: 'https://via.placeholder.com/300x300?text=Men+Sweater+10'
        },
        {
            id: 26,
            name: 'Alpaca Wool Sweater',
            description: 'Hypoallergenic alpaca wool sweater',
            image: 'https://via.placeholder.com/300x300?text=Men+Sweater+11'
        },
        {
            id: 27,
            name: 'Mock Neck Sweater',
            description: 'Contemporary mock neck design',
            image: 'https://via.placeholder.com/300x300?text=Men+Sweater+12'
        },
        {
            id: 28,
            name: 'Fair Isle Sweater',
            description: 'Traditional Nordic patterned sweater',
            image: 'https://via.placeholder.com/300x300?text=Men+Sweater+13'
        },
        {
            id: 29,
            name: 'Cotton-Cashmere Blend',
            description: 'Lightweight cotton-cashmere mix',
            image: 'https://via.placeholder.com/300x300?text=Men+Sweater+14'
        },
        {
            id: 30,
            name: 'Merino Wool Zip',
            description: 'Performance merino wool zip sweater',
            image: 'https://via.placeholder.com/300x300?text=Men+Sweater+15'
        }
    ];

    return (

        <>
        <div className="sweater-container">
            <header className="sweater-header">
                <h1>Men's Premium Sweaters</h1>
                <p>Handcrafted comfort for every occasion</p>
            </header>

            <div className="sweater-grid">
                {sweaters.map((sweater) => (
                    <div key={sweater.id} className="sweater-card">
                        <div className="sweater-image-wrapper">
                            <img
                                src={sweater.image}
                                alt={sweater.name}
                                loading="lazy"
                            />
                        </div>
                        <div className="sweater-info">
                            <h3>{sweater.name}</h3>
                            <p>{sweater.description}</p>
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

export default Men_sweater;
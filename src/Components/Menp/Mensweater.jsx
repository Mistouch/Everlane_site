import react from "react";
import Footer from "../Footerr/Footer,jsx";
import no1 from '../Men_Sweater/1.png'
import no2 from '../Men_Sweater/2.png'
import no3 from '../Men_Sweater/3.png'
import no4 from '../Men_Sweater/4.png'
import no5 from '../Men_Sweater/5.png'
import no6 from '../Men_Sweater/6.png'
import no7 from '../Men_Sweater/7.png'
import no8 from '../Men_Sweater/8.png'
import no9 from '../Men_Sweater/9.png'
import no10 from '../Men_Sweater/10.png'
import no11 from '../Men_Sweater/11.png'
import no12 from '../Men_Sweater/12.png'
import no13 from '../Men_Sweater/13.png'
import no14 from '../Men_Sweater/14.png'
import no15 from '../Men_Sweater/15.png'
import './Mensweater.css'
import React from "react";
import {useNavigate} from "react-router-dom";
const Men_sweater = () => {
    const navigate = useNavigate();
    const sweaters = [
        {
            id: 1,
            name: 'Crewneck Sweater',
            description: 'Classic wool blend crewneck sweater',
            image: no1
        },
        {
            id: 2,
            name: 'V-Neck Sweater',
            description: 'Lightweight merino wool v-neck',
            image: no2
        },
        {
            id: 3,
            name: 'Turtleneck Sweater',
            description: 'Warm cashmere blend turtleneck',
            image: no3
        },
        {
            id: 4,
            name: 'Cardigan Sweater',
            description: 'Button-front cardigan with pockets',
            image: no4
        },
        {
            id: 5,
            name: 'Cable Knit Sweater',
            description: 'Traditional cable knit pattern sweater',
            image: no5
        },
        {
            id: 6,
            name: 'Quarter-Zip Sweater',
            description: 'Performance wool quarter-zip pullover',
            image: no6
        },
        {
            id: 7,
            name: 'Shawl Collar Sweater',
            description: 'Luxurious shawl collar cardigan',
            image: no7
        },
        {
            id: 8,
            name: 'Fisherman Sweater',
            description: 'Chunky knit fisherman sweater',
            image: no8
        },
        {
            id: 9,
            name: 'Cashmere Crewneck',
            description: '100% pure cashmere crewneck',
            image: no9
        },
        {
            id: 10,
            name: 'Wool Blend Hoodie',
            description: 'Warm wool blend hooded sweater',
            image: no10
        },
        {
            id: 11,
            name: 'Alpaca Wool Sweater',
            description: 'Hypoallergenic alpaca wool sweater',
            image: no11
        },
        {
            id: 12,
            name: 'Mock Neck Sweater',
            description: 'Contemporary mock neck design',
            image: no12
        },
        {
            id: 13,
            name: 'Fair Isle Sweater',
            description: 'Traditional Nordic patterned sweater',
            image: no13
        },
        {
            id: 14,
            name: 'Cotton-Cashmere Blend',
            description: 'Lightweight cotton-cashmere mix',
            image: no14
        },
        {
            id: 15,
            name: 'Merino Wool Zip',
            description: 'Performance merino wool zip sweater',
            image: no15
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
    <div className="full-width-footer">
        <Footer />
    </div>
</>
    );
};

export default Men_sweater;
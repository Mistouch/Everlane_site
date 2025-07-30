import React from "react";
import { useNavigate } from "react-router-dom";
import "./Womensweater.css";
import Footer from "../Footerr/Footer,jsx";
import no1 from  '../Women_sweater/1.png'
import women_cashmere_crew_sweater from '../Assets/women_cashmere_chew_sweater.png';
import no3 from  '../Women_sweater/3.png'
import no4 from  '../Women_sweater/4.png'
import no5 from  '../Women_sweater/5.png'
import no6 from  '../Women_sweater/6.png'
import no7 from  '../Women_sweater/7.png'
import no8 from  '../Women_sweater/8.png'
import no9 from  '../Women_sweater/9.png'
import no10 from  '../Women_sweater/10.png'
const Womensweater = () => {
    const navigate = useNavigate();

    // Women's sweater data
    const sweaters = [
        { id: 1, name: "CASHMERE CREWNECK", color: "Purple", image: no1 },
        { id: 2, name: "CHUNKY KNIT CARDIGAN", color: "Camel", image: women_cashmere_crew_sweater },
        { id: 3, name: "TURTLENECK SWEATER", color: "Black", image: no3 },
        { id: 4, name: "OVERSIZED CABLE KNIT", color: "Cream", image: no4},
        { id: 5, name: "V-NECK MERINO WOOL", color: "Navy Blue", image:no5 },
        { id: 6, name: "CROPPED MOHAIR SWEATER", color: "Pink", image: no6 },
        { id: 7, name: "FISHERMAN RIB SWEATER", color: "Ash", image: no7 },
        { id: 8, name: "BELTED CARDIGAN", color: "Cream White", image: no8 },
        { id: 9, name: "ALPACA BLEND SWEATER", color: "Moss Green", image: no9 },
        { id: 10, name: "OFF-SHOULDER SWEATER", color: "Dusty Rose", image: no10}
    ];

    return (
        <>
            <div className="womensweater-container">
                <h2 className="collection-title">WOMEN'S SWEATER COLLECTION</h2>
                <div className="womensweater-grid">
                    {sweaters.map((sweater) => (
                        <div key={sweater.id} className="womensweater-item">
                            <div className="womensweater-image-container">
                                <img
                                    src={sweater.image}
                                    alt={sweater.name}
                                    className="womensweater-image"
                                />
                            </div>
                            <div className="womensweater-details">
                                <h3 className="womensweater-name">{sweater.name}</h3>
                                <p className="womensweater-color">{sweater.color}</p>
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

export default Womensweater;
import React from "react";
import Footer from "../Footerr/Footer,jsx";
import "./Kidsweater.css";
import cozy_bear from '../Assets/Kid_cozy_bear.png';
import { useNavigate } from "react-router-dom";
import no2 from '../Kid_Sweater/2.png'
import no1 from '../Kid_Sweater/1.png'
import no4 from '../Kid_Sweater/4.png'
import no3 from '../Kid_Sweater/3.png'
import no5 from '../Kid_Sweater/5.png'
import no6 from '../Kid_Sweater/6.png'
import no7 from '../Kid_Sweater/7.png'
import no8 from '../Kid_Sweater/8.png'
import no9 from '../Kid_Sweater/9.png'
import no10 from '../Kid_Sweater/10.png'
const Kidsweater = () => {
    const navigate = useNavigate();

    // Sample kids sweater data with prices added
    const kidsSweaters = [
        { id: 1, name: "Cozy Bear Sweater", color: "Light Blue", image: no1 },
        { id: 2, name: "Striped Wool Sweater", color: "Navy/White", image: no2 },
        { id: 3, name: "Reindeer Pattern", color: "Red", image: no3 },
        { id: 4, name: "Cardigan", color: "Multicolor", image: no4 },
        { id: 5, name: "Knit Cable Sweater", color: "Cream",  image: no5 },
        { id: 6, name: "Dinosaur Hoodie", color: "Green", image: no6 },
        { id: 7, name: "High Neck Fleece Jacket", color: "Pink",  image: no7 },
        { id: 8, name: "Snowflake Pattern", color: "Black",  image:no8 },
        { id: 9, name: "Animal Ear Hoodie", color: "Gray",  image:no9 },
        { id: 10, name: "Cotton Sweater", color: "Dak blue",  image: no10 }
    ];

    return (
        <>
        <div className="kidsweater-page">
            <header className="page-header">
                <h1 className="collection-title">KID'S SWEATERS</h1>
            </header>

            <div className="sweaters-grid">
                {kidsSweaters.map((sweater) => (
                    <div key={sweater.id} className="sweater-card">
                        <div className="sweater-image-container">
                            <img
                                src={sweater.image}
                                alt={sweater.name}
                                className="product-image"
                                onError={(e) => {
                                    e.target.src = "https://via.placeholder.com/300x300?text=Image+Not+Found";
                                }}
                            />
                        </div>
                        <div className="sweater-info">
                            <h3 className="product-name">{sweater.name}</h3>
                            <p className="product-color">{sweater.color}</p>
                            <p className="product-price">{sweater.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <Footer/>
    </>
    );
};

export default Kidsweater;
import React from "react";
import Footer from "../Footerr/Footer,jsx";
import './Kiddenimpant.css';
import kid_classic_denim_pant from '../Assets/kid_classic_denim_pant.png';
import { useNavigate } from "react-router-dom";
import no2 from '../Kid_DenimPant/2.png'
import no3 from '../Kid_DenimPant/3.png'
import no4 from '../Kid_DenimPant/4.png'
import no5 from '../Kid_DenimPant/5.png'
import no6  from '../Kid_DenimPant/6.png'
import no7  from '../Kid_DenimPant/7.png'
import no8  from '../Kid_DenimPant/8.png'
import no9  from '../Kid_DenimPant/9.png'
import no10  from '../Kid_DenimPant/10.png'
const Kiddenimpant = () => {
    const navigate = useNavigate();

    // Sample kids denim pants data with prices added
    const kidDenimPants = [
        { id: 1, name: "Classic Blue Jeans", color: "Light Blue", fit: "Regular", image: kid_classic_denim_pant },
        { id: 2, name: "Slim Fit Jeans", color: "Dark Blue", fit: "Slim", image: no2 },
        { id: 3, name: "Distressed Denim", color: "Medium Wash", fit: "Regular",  image: no3 },
        { id: 4, name: "Skinny Jeans", color: "Black", fit: "Skinny",  image:no4 },
        { id: 5, name: "Cargo Denim", color: "Stone Wash", fit: "Relaxed", image: no5 },
        { id: 6, name: "Patched Jeans", color: "Light Wash", fit: "Regular", image: no6},
        { id: 7, name: "Ripped Jeans", color: "Medium Blue", fit: "Slim", image: no7 },
        { id: 8, name: "Stretch Denim", color: "Dark Wash", fit: "Skinny", image: no8 },
        { id: 9, name: "Wide Leg Jeans", color: "Vintage Blue", fit: "Wide",image: no9 },
        { id: 10, name: "Denim Overalls", color: "Denim Blue", fit: "Regular",  image:no10}
    ];

    return (
        <>
        <div className="kid-denim-pants-page">
            <header className="page-header">
                <h1 className="collection-title">KIDS DENIM PANT</h1>
            </header>

            <div className="pants-grid">
                {kidDenimPants.map((pant) => (
                    <div key={pant.id} className="pant-card">
                        <div className="pant-image-container">
                            <img
                                src={pant.image}
                                alt={pant.name}
                                className="product-image"
                                onError={(e) => {
                                    e.target.src = "https://via.placeholder.com/300x300?text=Image+Not+Found";
                                }}
                            />
                        </div>
                        <div className="pant-info">
                            <h3 className="product-name">{pant.name}</h3>
                            <p className="product-details">{pant.color} | {pant.fit}</p>
                            <p className="product-price">{pant.price}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
            <Footer />
    </>

    );
};

export default Kiddenimpant;
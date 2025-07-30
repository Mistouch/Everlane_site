import React from "react";
import Footer from "../Footerr/Footer,jsx";
import "./Kiddenimjacket.css";
import denimJacket1 from '../Assets/kid_denim_jacket.png';
import { useNavigate } from "react-router-dom";
import no2 from '../Kid_DenimJacket/2.png'
import no3 from '../Kid_DenimJacket/3.png'
import no4 from '../Kid_DenimJacket/4.png'
import no5 from '../Kid_DenimJacket/5.png'
import no6 from '../Kid_DenimJacket/6.png'
import no7 from '../Kid_DenimJacket/7.png'
import no8 from '../Kid_DenimJacket/8.png'
import no9 from '../Kid_DenimJacket/9.png'
import no10 from '../Kid_DenimJacket/10.png'
const Kiddenimjacket = () => {
    const navigate = useNavigate();

    // Sample kids denim jackets data with prices added
    const kidDenimJackets = [
        { id: 1, name: "Classic Blue Denim Jacket", color: "Light Blue", image: denimJacket1 },
        { id: 2, name: "Distressed Denim Jacket", color: "Medium Blue", image: no2},
        { id: 3, name: "Black Denim Jacket", color: "Black", image: no3 },
        { id: 4, name: "Embroidered Denim Jacket", color: "Light Wash", image: no4 },
        { id: 5, name: "Oversized Denim Jacket", color: "Dark Blue",image:no5},
        { id: 6, name: "Acid Wash Denim Jacket", color: "Grey Wash", image: no6},
        { id: 7, name: "Cropped Denim Jacket", color: "Medium Blue",  image: no7 },
        { id: 8, name: "Pink Denim Jacket", color: "Pink", image: no8 },
        { id: 9, name: "Patched Denim Jacket", color: "Dark Wash", image: no9 },
        { id: 10, name: "Faded Denim Jacket", color: "Vintage Blue",  image: no10 }
    ];

    return (
        <>
            <div className="kid-denim-page">
            <header className="page-header">
                <h1 className="collection-title">KID'S DENIM JACKETS</h1>
            </header>

            <div className="jackets-grid">
                {kidDenimJackets.map((jacket) => (
                    <div key={jacket.id} className="jacket-card">
                        <div className="jacket-image-container">
                            <img
                                src={jacket.image}
                                alt={jacket.name}
                                className="product-image"
                                onError={(e) => {
                                    e.target.src = "https://via.placeholder.com/300x300?text=Image+Not+Found";
                                }}
                            />
                        </div>
                        <div className="jacket-info">
                            <h3 className="product-name">{jacket.name}</h3>
                            <p className="product-color">{jacket.color}</p>
                            <p className="product-price">{jacket.price}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    <Footer />
    </>
    );
};

export default Kiddenimjacket;
import React from "react";
import Footer from "../Footerr/Footer,jsx";
import "./Kidwoven.css";
import kid_plaid_shirt from '../Assets/kid_plaid_shirt.png';
import { useNavigate } from "react-router-dom";
import no1 from '../KId_Woven/1.png'
import no3 from '../KId_Woven/3.png'
import no4 from '../KId_Woven/4.png'
import no5 from '../KId_Woven/5.png'
import no6 from '../KId_Woven/6.png'
import no7 from '../KId_Woven/7.png'
import no8 from '../KId_Woven/8.png'
import no9 from '../KId_Woven/9.png'
import no10 from '../KId_Woven/10.png'
const Kidwoven = () => {
    const navigate = useNavigate();

    // Sample kids woven products data with prices added
    const kidWovens = [
        { id: 1, name: "Denim Overalls", color: "Blue", type: "Overalls",  image: no1 },
        { id: 2, name: "Plaid Shirt", color: "Red/Black", type: "Shirt",  image: kid_plaid_shirt },
        { id: 8, name: "Twill Jumper", color: "Navy", type: "Jumper",  image: no8 },
        { id: 3, name: "Khaki Shorts", color: "Beige", type: "Shorts", image: no3 },
        { id: 4, name: "Denim Jacket", color: "Light Blue", type: "Jacket",  image: no4 },
        { id: 5, name: "Checked Dress", color: "Yellow/White", type: "Dress",  image:no5 },
        { id: 6, name: "Corduroy Pants", color: "Brown", type: "Pants",  image: no6 },
        { id: 7, name: "Linen Shirt", color: "White", type: "Shirt",  image: no7 },

        { id: 9, name: "Chambray Shirt", color: "Light Blue", type: "Shirt", image: no9 },
        { id: 10, name: "Denim Skirt", color: "Dark Blue", type: "Skirt",  image: no10 }
    ];

    return (
        <>
        <div className="kidwoven-page">
            <header className="page-header">
                <h1 className="collection-title">KID'S WOVEN</h1>
            </header>

            <div className="wovens-grid">
                {kidWovens.map((woven) => (
                    <div key={woven.id} className="woven-card">
                        <div className="woven-image-container">
                            <img
                                src={woven.image}
                                alt={woven.name}
                                className="product-image"
                                onError={(e) => {
                                    e.target.src = "https://via.placeholder.com/300x300?text=Image+Not+Found";
                                }}
                            />
                        </div>
                        <div className="woven-info">
                            <h3 className="product-name">{woven.name}</h3>
                            <p className="product-details">{woven.color} | {woven.type}</p>
                            <p className="product-price">{woven.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    <Footer />
    </>
    );
};

export default Kidwoven;
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Womenwoven.css"; // Create this CSS file
import women_Silk_Button_Down_Shirt from '../Assets/women_Silk_Button_Down_Shirt.png'; // Update with your image path
import Footer from "../Footerr/Footer,jsx";
const Womenwoven = () => {
    const navigate = useNavigate();

    // Women's woven products data
    const wovenProducts = [
        { id: 1, name: "Classic White Blouse", color: "White",  material: "100% Cotton", image: "https://via.placeholder.com/300x300?text=White+Blouse" },
        { id: 2, name: "Silk Button-Down Shirt", color: "Creamy White", material: "Pure Silk", image: women_Silk_Button_Down_Shirt },
        { id: 3, name: "Linen Camp Shirt", color: "Ecru",  material: "Organic Linen", image: "https://via.placeholder.com/300x300?text=Linen+Shirt" },
        { id: 4, name: "Denim Shirt", color: "Light Wash",  material: "Cotton Denim", image: "https://via.placeholder.com/300x300?text=Denim+Shirt" },
        { id: 5, name: "Chambray Popover", color: "Sky Blue",  material: "Chambray", image: "https://via.placeholder.com/300x300?text=Chambray+Top" },
        { id: 6, name: "Plaid Flannel Shirt", color: "Red/Black", material: "Brushed Cotton", image: "https://via.placeholder.com/300x300?text=Flannel+Shirt" },
        { id: 7, name: "Twill Utility Shirt", color: "Olive Green",material: "Cotton Twill", image: "https://via.placeholder.com/300x300?text=Utility+Shirt" },
        { id: 8, name: "Seersucker Blouse", color: "Navy/White",  material: "Seersucker", image: "https://via.placeholder.com/300x300?text=Seersucker" },
        { id: 9, name: "Bouclé Jacket", color: "Cream",material: "Wool Bouclé", image: "https://via.placeholder.com/300x300?text=Boucle+Jacket" },
        { id: 10, name: "Taffeta Blouse", color: "Burgundy", material: "Silk Taffeta", image: "https://via.placeholder.com/300x300?text=Taffeta+Blouse" }
    ];

    return (
        <>
            <div className="womenwoven-page">
                <header className="page-header">
                    <h1>Women's Woven Collection</h1>
                    <p>Elegant woven tops for every occasion</p>
                </header>

                <div className="woven-grid">
                    {wovenProducts.map((product) => (
                        <div key={product.id} className="woven-card">
                            <div className="woven-image">
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div className="woven-info">
                                <h3>{product.name}</h3>
                                <p>Color: {product.color}</p>
                                <p>Material: {product.material}</p>
                                <p className="price">{product.price}</p>
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
            <Footer/>
        </>
    );
};

export default Womenwoven;
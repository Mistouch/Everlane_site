import React from "react";
import { useNavigate } from "react-router-dom";
import "./Womenwoven.css";
import women_Silk_Button_Down_Shirt from '../Assets/women_Silk_Button_Down_Shirt.png';
import Footer from "../Footerr/Footer,jsx";
import no1 from '../Women_woven/1.png'
import no3  from '../Women_woven/3.png'
import no4  from '../Women_woven/4.png'
import no5  from '../Women_woven/5.png'
import no6  from '../Women_woven/6.png'
import no7  from '../Women_woven/7.png'
import no8  from '../Women_woven/8.png'
import no9  from '../Women_woven/9.png'
import no10  from '../Women_woven/10.png'
const Womenwoven = () => {
    const navigate = useNavigate();

    // Women's woven products data
    const wovenProducts = [
        { id: 1, name: "CLASSIC BLACK BLOUSE", color: "Black", material: "100% Cotton", image: no1 },
        { id: 2, name: "SILK BUTTON-DOWN SHIRT", color: "Creamy White", material: "Pure Silk", image: women_Silk_Button_Down_Shirt },
        { id: 3, name: "LINEN CAMP SHIRT", color: "White", material: "Organic Linen", image: no3 },
        { id: 4, name: "DENIM SHIRT", color: "Light Wash", material: "Cotton Denim", image: no4 },
        { id: 5, name: "CHAMBRAY POPOVER", color: "Sky Blue", material: "Chambray", image: no5 },
        { id: 6, name: "PLAID FLANNEL SHIRT", color: "Red/Black", material: "Brushed Cotton", image: no6 },
        { id: 7, name: "TWILL UTILITY SHIRT", color: "Olive Green", material: "Cotton Twill", image: no7 },
        { id: 8, name: "SEERSUCKER BLOUSE", color: "Navy/White", material: "Seersucker", image: no8 },
        { id: 9, name: "BOUCLÉ JACKET", color: "Cream", material: "Wool Bouclé", image: no9 },
        { id: 10, name: "TAFFETA BLOUSE", color: "Black", material: "Silk Taffeta", image: no10 }
    ];

    return (
        <>
            <div className="womenwoven-container">
                <h2 className="collection-title">WOMEN'S WOVEN COLLECTION</h2>
                <div className="womenwoven-grid">
                    {wovenProducts.map((product) => (
                        <div key={product.id} className="womenwoven-item">
                            <div className="womenwoven-image-container">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="womenwoven-image"
                                />
                            </div>
                            <div className="womenwoven-details">
                                <h3 className="womenwoven-name">{product.name}</h3>
                                <p className="womenwoven-color">{product.color}</p>
                                <p className="womenwoven-material">{product.material}</p>
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

export default Womenwoven;
import React from "react";
import Footer from "../Footerr/Footer,jsx";
import "./Womenshirt.css"; // Make sure to create this CSS file
import { useNavigate } from "react-router-dom";
import women_classic_w_blouse from '../Assets/women_classic_w_blouse.png';
const Womenshirt = () => {
    const navigate = useNavigate();

    // Women's t-shirt data
    const tshirts = [
        { id: 1, name: "Classic White Blouse", color: "White", image:women_classic_w_blouse },
        { id: 2, name: "Black V-Neck Tee", color: "Black", image: "https://via.placeholder.com/300x300?text=White+Blouse" },
        { id: 3, name: "Floral Print Top", color: "Navy/Pink", image: "https://via.placeholder.com/300x300?text=Floral+Top" },
        { id: 4, name: "Oversized Gray Tee", color: "Heather Gray",  image: "https://via.placeholder.com/300x300?text=Oversized+Tee" },
        { id: 5, name: "Cropped Pink Tee", color: "Pink",  image: "https://via.placeholder.com/300x300?text=Cropped+Tee" },
        { id: 6, name: "Striped Boat Neck", color: "Red/White", image: "https://via.placeholder.com/300x300?text=Striped+Top" },
        { id: 7, name: "Satin Camisole", color: "Burgundy", image: "https://via.placeholder.com/300x300?text=Satin+Top" },
        { id: 8, name: "Ruffled Blouse", color: "Mint", image: "https://via.placeholder.com/300x300?text=Ruffled+Blouse" },
        { id: 9, name: "Wrap Front Top", color: "Leopard Print",image: "https://via.placeholder.com/300x300?text=Wrap+Top" },
        { id: 10, name: "Lace Trim Tee", color: "Ivory",image: "https://via.placeholder.com/300x300?text=Lace+Tee" },
        { id: 11, name: "Cold Shoulder Top", color: "Royal Blue",image: "https://via.placeholder.com/300x300?text=Cold+Shoulder" },
        { id: 12, name: "Tie-Waist Blouse", color: "Dusty Rose",  image: "https://via.placeholder.com/300x300?text=Tie-Waist" },
        { id: 13, name: "Silk Button-Down", color: "Blush", image: "https://via.placeholder.com/300x300?text=Silk+Blouse" },
        { id: 14, name: "Off-Shoulder Top", color: "Yellow",  image: "https://via.placeholder.com/300x300?text=Off-Shoulder" },
        { id: 15, name: "Belted Tunic", color: "Emerald", image: "https://via.placeholder.com/300x300?text=Tunic+Top" }
    ];

    return (
        <>
            <div className="womenshirt-page">
                <header className="page-header">
                    <h1>Women's T-Shirts Collection</h1>
                    <p>Premium quality styles for every occasion</p>
                </header>

                <div className="tshirts-grid">
                    {tshirts.map((tshirt) => (
                        <div key={tshirt.id} className="tshirt-card">
                            <div className="tshirt-image">
                                <img src={tshirt.image} alt={tshirt.name} />
                            </div>
                            <div className="tshirt-info">
                                <h3>{tshirt.name}</h3>
                                <p>Color: {tshirt.color}</p>
                                <p className="price">{tshirt.price}</p>
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

export default Womenshirt;
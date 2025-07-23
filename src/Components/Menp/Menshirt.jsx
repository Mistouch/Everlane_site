import React from "react";
import Footer from "../Footerr/Footer,jsx";
import "./Menshirt.css"; // Make sure this import exists
import tee from '../Assets/Tee.png';
import {useNavigate} from "react-router-dom";
const Menshirt = () => {
    const navigate = useNavigate();
    // Sample t-shirt data
    const tshirts = [
        { id: 1, name: "Classic White Tee", color: "White", image: "https://via.placeholder.com/300x300?text=White+Tee" },
        { id: 2, name: "Black Premium Cotton", color: "Black", image: tee },
        { id: 3, name: "Navy Blue Stripe", color: "Navy",  image: "https://via.placeholder.com/300x300?text=Navy+Tee" },
        { id: 4, name: "Heather Gray", color: "Gray", image: "https://via.placeholder.com/300x300?text=Gray+Tee" },
        { id: 5, name: "Red V-Neck", color: "Red",  image: "https://via.placeholder.com/300x300?text=Red+Tee" },
        { id: 6, name: "Olive Green Basic", color: "Olive",  image: "https://via.placeholder.com/300x300?text=Olive+Tee" },
        { id: 7, name: "Maroon Crewneck", color: "Maroon",  image: "https://via.placeholder.com/300x300?text=Maroon+Tee" },
        { id: 8, name: "Sky Blue Pocket", color: "Blue",  image: "https://via.placeholder.com/300x300?text=Blue+Tee" },
        { id: 9, name: "Charcoal Heather", color: "Charcoal",  image: "https://via.placeholder.com/300x300?text=Charcoal+Tee" },
        { id: 10, name: "Mustard Yellow", color: "Yellow",  image: "https://via.placeholder.com/300x300?text=Yellow+Tee" },
        { id: 11, name: "Forest Green", color: "Green", image: "https://via.placeholder.com/300x300?text=Green+Tee" },
        { id: 12, name: "Sandstone", color: "Tan",  image: "https://via.placeholder.com/300x300?text=Tan+Tee" },
        { id: 13, name: "Burgundy", color: "Burgundy",  image: "https://via.placeholder.com/300x300?text=Burgundy+Tee" },
        { id: 14, name: "Slate Gray", color: "Slate",  image: "https://via.placeholder.com/300x300?text=Slate+Tee" },
        { id: 15, name: "Coral Summer", color: "Coral",  image: "https://via.placeholder.com/300x300?text=Coral+Tee" }
    ];

    return (
        <>
        <div className="menshirt-page">
            <header className="page-header">
                <h1>Men's T-Shirts Collection</h1>
                <p>Premium quality t-shirts for every occasion</p>
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

export default Menshirt;
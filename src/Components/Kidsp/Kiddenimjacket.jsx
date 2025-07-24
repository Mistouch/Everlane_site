import React from "react";
import Footer from "../Footerr/Footer,jsx";
import "./Kiddenimjacket.css";
import denimJacket1 from '../Assets/kid_denim_jacket.png'; // Add your actual images
import { useNavigate } from "react-router-dom";

const Kiddenimjacket = () => {
    const navigate = useNavigate();

    // Sample kids denim jackets data
    const kidDenimJackets = [
        { id: 1, name: "Classic Blue Denim Jacket", color: "Light Blue",image: denimJacket1 },
        { id: 2, name: "Distressed Denim Jacket", color: "Medium Blue", image: "https://via.placeholder.com/300x300?text=Distressed+Jacket" },
        { id: 3, name: "Black Denim Jacket", color: "Black", size: "5-6Y", image: "https://via.placeholder.com/300x300?text=Black+Jacket" },
        { id: 4, name: "Embroidered Denim Jacket", color: "Light Wash", image: "https://via.placeholder.com/300x300?text=Embroidered+Jacket" },
        { id: 5, name: "Oversized Denim Jacket", color: "Dark Blue",  image: "https://via.placeholder.com/300x300?text=Oversized+Jacket" },
        { id: 6, name: "Acid Wash Denim Jacket", color: "Grey Wash", image: "https://via.placeholder.com/300x300?text=Acid+Wash" },
        { id: 7, name: "Cropped Denim Jacket", color: "Medium Blue",  image: "https://via.placeholder.com/300x300?text=Cropped+Jacket" },
        { id: 8, name: "Pink Denim Jacket", color: "Pink",image: "https://via.placeholder.com/300x300?text=Pink+Jacket" },
        { id: 9, name: "Patched Denim Jacket", color: "Dark Wash", image: "https://via.placeholder.com/300x300?text=Patched+Jacket" },
        { id: 10, name: "Faded Denim Jacket", color: "Vintage Blue",  image: "https://via.placeholder.com/300x300?text=Faded+Jacket" }
    ];

    return (
        <>
            <div className="kid-denim-page">
                <header className="page-header">
                    <h1>Kids Denim Jackets</h1>
                    <p>Stylish and durable denim jackets for your little ones</p>
                </header>

                <div className="jackets-grid">
                    {kidDenimJackets.map((jacket) => (
                        <div key={jacket.id} className="jacket-card">
                            <div className="jacket-image">
                                <img
                                    src={jacket.image}
                                    alt={jacket.name}
                                    onError={(e) => {
                                        e.target.src = "https://via.placeholder.com/300x300?text=Image+Not+Found";
                                    }}
                                />
                            </div>
                            <div className="jacket-info">
                                <h3>{jacket.name}</h3>
                                <p>Color: {jacket.color}</p>
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

export default Kiddenimjacket;
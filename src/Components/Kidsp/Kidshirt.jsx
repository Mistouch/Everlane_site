import React from "react";
import Footer from "../Footerr/Footer,jsx";
import "./Kidshirt.css";
import Kid_diansoure_tee from '../Assets/Kid_tee_dinasaur.png';
import { useNavigate } from "react-router-dom";

const Kidshirt = () => {
    const navigate = useNavigate();

    // Sample kids t-shirt data
    const kidsShirts = [
        { id: 1, name: "Colorful Dinosaur Tee", color: "Blue", image: Kid_diansoure_tee },
        { id: 2, name: "Space Adventure Shirt", color: "Black", image: "https://via.placeholder.com/300x300?text=Space+Shirt" },
        { id: 3, name: "Unicorn Magic Top", color: "Pink", image: "https://via.placeholder.com/300x300?text=Unicorn+Top" },
        { id: 4, name: "Superhero Logo Tee", color: "Red", image: "https://via.placeholder.com/300x300?text=Superhero+Tee" },
        { id: 5, name: "Animal Friends Shirt", color: "Green", image: "https://via.placeholder.com/300x300?text=Animal+Shirt" },
        { id: 6, name: "Rainbow Stripes Tee", color: "Multicolor", image: "https://via.placeholder.com/300x300?text=Rainbow+Tee" },
        { id: 7, name: "Sports Fan Top", color: "White", image: "https://via.placeholder.com/300x300?text=Sports+Top" },
        { id: 8, name: "Jungle Safari Shirt", color: "Khaki", image: "https://via.placeholder.com/300x300?text=Jungle+Shirt" },
        { id: 9, name: "Cartoon Character Tee", color: "Yellow", image: "https://via.placeholder.com/300x300?text=Cartoon+Tee" },
        { id: 10, name: "Butterfly Print Top", color: "Purple", image: "https://via.placeholder.com/300x300?text=Butterfly+Top" }
    ];

    return (
        <>
            <div className="kidshirt-page">
                <header className="page-header">
                    <h1>Kids T-Shirts Collection</h1>
                    <p>Fun and comfortable t-shirts for your little ones</p>
                </header>

                <div className="tshirts-grid">
                    {kidsShirts.map((shirt) => (
                        <div key={shirt.id} className="tshirt-card">
                            <div className="tshirt-image">
                                <img
                                    src={shirt.image}
                                    alt={shirt.name}
                                    onError={(e) => {
                                        e.target.src = "https://via.placeholder.com/300x300?text=Image+Not+Found";
                                    }}
                                />
                            </div>
                            <div className="tshirt-info">
                                <h3>{shirt.name}</h3>
                                <p>Color: {shirt.color}</p>
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

export default Kidshirt;
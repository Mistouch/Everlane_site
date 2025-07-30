import React from "react";
import Footer from "../Footerr/Footer,jsx";
import "./Kidshirt.css";
import Kid_diansoure_tee from '../Assets/Kid_tee_dinasaur.png';
import { useNavigate } from "react-router-dom";
import no2 from '../Kid_Tees/2.png'
import no3 from '../Kid_Tees/3.png'
import no4 from '../Kid_Tees/4.png'
import no5 from '../Kid_Tees/5.png'
import no6 from '../Kid_Tees/6.png'
import no7 from '../Kid_Tees/7.png'
import no8 from '../Kid_Tees/8.png'
import no9 from '../Kid_Tees/9.png'
import no10 from '../Kid_Tees/10.png'
const Kidshirt = () => {
    const navigate = useNavigate();

    // Sample kids t-shirt data
    const kidsShirts = [
        { id: 1, name: "Colorful Dinosaur Tee", color: "Multicolor", image: Kid_diansoure_tee },
        { id: 2, name: "Space Adventure Shirt", color: "Black", image: no2},
        { id: 5, name: "Animal Friends Shirt", color: "Green", image: no5 },
        { id: 3, name: "Unicorn Magic Top", color: "Pink", image:no3 },
        { id: 4, name: "Superhero Logo Tee", color: "Red", image: no4 },
        { id: 6, name: "Stripes Tee", color: "Green/white", image: no6},
        { id: 7, name: "Sports Fan Top", color: "White", image: no7 },
        { id: 8, name: "Romper Jumpsuit", color: "Khaki", image: no8 },
        { id: 9, name: "Cartoon Character Tee", color: "Yellow", image: no9 },
        { id: 10, name: "Butterfly Print Top", color: "Purple", image:no10 }
    ];

    return (
        <>
        <div className="kidshirt-page">
            <header className="page-header">
                <h1 className="collection-title">KID'S T-SHIRTS</h1>
            </header>

            <div className="tshirts-grid">
                {kidsShirts.map((shirt) => (
                    <div key={shirt.id} className="tshirt-card">
                        <div className="tshirt-image-container">
                            <img
                                src={shirt.image}
                                alt={shirt.name}
                                className="product-image"
                                onError={(e) => {
                                    e.target.src = "https://via.placeholder.com/300x300?text=Image+Not+Found";
                                }}
                            />
                        </div>
                        <div className="tshirt-info">
                            <h3 className="product-name">{shirt.name}</h3>
                            <p className="product-color">{shirt.color}</p>
                            <p className="product-price">{shirt.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    <Footer />
    </>
    );
};

export default Kidshirt;
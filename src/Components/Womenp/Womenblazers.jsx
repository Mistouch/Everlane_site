import React from "react";
import Footer from "../Footerr/Footer,jsx";
import "./Womenblazers.css";
import { useNavigate } from "react-router-dom";
import blazer1 from '../Womenblazer/1.png';
import blazer2 from '../Womenblazer/2.png';
import blazer3 from '../Womenblazer/3.png';
import blazer4 from '../Womenblazer/4.png';
import blazer5 from '../Womenblazer/5.png';
import blazer6 from '../Womenblazer/6.png';
import blazer7 from '../Womenblazer/7.png';
import blazer8 from '../Womenblazer/8.png';
import blazer9 from '../Womenblazer/9.png';
import blazer10 from '../Womenblazer/10.png';
const Womenblazers = () => {
    const navigate = useNavigate();

    // Women's blazers data
    const blazers = [
        { id: 1, name: "CLASSIC BLACK BLAZER", color: "Black", image: blazer1 },
        { id: 2, name: "DOUBLE-BREASTED TWEED", color: "Beige/Black", image: blazer2 },
        { id: 3, name: "OVERSIZED WHITE BLAZER", color: "White", image: blazer3 },
        { id: 4, name: "TAILORED NAVY SUIT JACKET", color: "Navy", image: blazer4 },
        { id: 5, name: "BELTED CHECKERED BLAZER", color: "Gray", image: blazer5 },
        { id: 6, name: "CROPPED LEATHER JACKET", color: "Black", image: blazer6},
        { id: 7, name: "LIGHTWEIGHT LINEN BLAZER", color: "Light Gray", image: blazer7 },
        { id: 8, name: "STRUCTURED SHOULDER BLAZER", color: "Camel", image: blazer8 },
        { id: 9, name: "SATIN LAPEL TUXEDO JACKET", color: "Black", image: blazer9 },
        { id: 10, name: "PASTEL PINK BLAZER", color: "Dusty Pink", image: blazer10 }
    ];

    return (
        <>
            <div className="womenblazers-container">
                <h2 className="collection-title">WOMEN'S BLAZERS COLLECTION</h2>
                <div className="womenblazers-grid">
                    {blazers.map((blazer) => (
                        <div key={blazer.id} className="womenblazers-item">
                            <div className="womenblazers-image-container">
                                <img
                                    src={blazer.image}
                                    alt={blazer.name}
                                    className="womenblazers-image"
                                />
                            </div>
                            <div className="womenblazers-details">
                                <h3 className="womenblazers-name">{blazer.name}</h3>
                                <p className="womenblazers-color">{blazer.color}</p>
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

export default Womenblazers;
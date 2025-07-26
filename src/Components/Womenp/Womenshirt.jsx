import React from "react";
import Footer from "../Footerr/Footer,jsx";
import "./Womenshirt.css";
import { useNavigate } from "react-router-dom";
import women_classic_w_blouse from '../Assets/women_classic_w_blouse.png';
import no2 from '../Women_Tees/2.png'
import no3 from '../Women_Tees/3.png'
import no4 from '../Women_Tees/4.png'
import no5  from '../Women_Tees/5.png'
import no6  from '../Women_Tees/6.png'
import no7  from '../Women_Tees/7.png'
import no8  from '../Women_Tees/8.png'
import no9  from '../Women_Tees/9.png'
import no10  from '../Women_Tees/10.png'
import no11  from '../Women_Tees/11.png'
import no12  from '../Women_Tees/12.png'
import no13  from '../Women_Tees/13.png'
import no14  from '../Women_Tees/14.png'
import no15  from '../Women_Tees/15.png'
const Womenshirt = () => {
    const navigate = useNavigate();

    // Women's t-shirt data
    const tshirts = [
        { id: 1, name: "CLASSIC WHITE BLOUSE", color: "White", image: women_classic_w_blouse },
        { id: 2, name: "BLACK V-NECK TEE", color: "Black", image: no2 },
        { id: 3, name: "FLORAL PRINT TOP", color: "Navy/Pink", image: no3 },
        { id: 4, name: "OVERSIZED GRAY TEE", color: "Heather Gray", image: no4 },
        { id: 5, name: "CROPPED PINK TEE", color: "Pink", image: no5 },
        { id: 6, name: "STRIPED BOAT NECK", color: "Red/White", image: no6 },
        { id: 7, name: "SATIN CAMISOLE", color: "Black", image: no7 },
        { id: 8, name: "RUFFLED BLOUSE", color: "Mint", image: no8 },
        { id: 9, name: "WRAP FRONT TOP", color: "Leopard Print",image: no9 },
        { id: 10, name: "LACE TRIM TEE", color: "Ivory", image: no10 },
        { id: 11, name: "COLD SHOULDER TOP", color: "Royal Blue", image: no11 },
        { id: 12, name: "SATIN IE-WAIST BLOUSE", color: "Mint", image: no12 },
        { id: 13, name: "SILK BUTTON-DOWN", color: "Golden", image: no13 },
        { id: 14, name: "OFF-SHOULDER TOP", color: "Yellow", image: no14 },
        { id: 15, name: "BELTED TUNIC", color: "Emerald", image: no15 }
    ];

    return (
        <>
            <div className="womenshirt-container">
                <h2 className="collection-title">WOMEN'S TOPS COLLECTION</h2>
                <div className="womenshirt-grid">
                    {tshirts.map((tshirt) => (
                        <div key={tshirt.id} className="womenshirt-item">
                            <div className="womenshirt-image-container">
                                <img
                                    src={tshirt.image}
                                    alt={tshirt.name}
                                    className="womenshirt-image"
                                />
                            </div>
                            <div className="womenshirt-details">
                                <h3 className="womenshirt-name">{tshirt.name}</h3>
                                <p className="womenshirt-color">{tshirt.color}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button
                className="home-button"
                onClick={() => navigate('/')}
            >
                HOME
            </button>

            <div className="full-width-footer">
                <Footer />
            </div>
        </>
    );
};

export default Womenshirt;
import React from "react";
import Footer from "../Footerr/Footer,jsx";
import "./Womentrouser.css";
import { useNavigate } from "react-router-dom";
import trouser1 from '../Women_trouser/1.png'
import trouser2 from '../Women_trouser/2.png'
import trouser3 from '../Women_trouser/3.png'
import trouser4 from '../Women_trouser/4.png'
import trouser5 from '../Women_trouser/5.png'
import trouser6 from '../Women_trouser/6.png'
import trouser7 from '../Women_trouser/7.png'
import trouser8 from '../Women_trouser/8.png'
import trouser9 from '../Women_trouser/9.png'
import trouser10 from '../Women_trouser/10.png'
const Womentrouser = () => {
    const navigate = useNavigate();

    // Women's trousers data
    const trousers = [
        { id: 1, name: "CLASSIC BLACK TROUSERS", color: "Black", image: trouser1 },
        { id: 2, name: "HIGH-WAISTED WIDE LEG", color: "Cream", image: trouser2 },
        { id: 3, name: "TAILORED OFFICE PANT", color: "Navy", image: trouser3 },
        { id: 4, name: "PAPERBAG WAIST TROUSER", color: "Old Rose", image: trouser4 },
        { id: 5, name: "PLEATED FRONT PANT", color: "Gray", image: trouser5 },
        { id: 6, name: "CROPPED CIGARETTE PANT", color: "Charcoal", image: trouser6 },
        { id: 7, name: "LINEN DRAWSTRING TROUSER", color: "Ecru", image: trouser7 },
        { id: 8, name: "CHECKERED SLACKS", color: "Black/White", image: trouser8 },
        { id: 9, name: "LEATHER-LIKE LEGGINGS", color: "Black", image: trouser9 },
        { id: 10, name: "STRAIGHT LEG SUIT PANT", color: "Black", image: trouser10 }
    ];

    return (
        <>
            <div className="womentrouser-container">
                <h2 className="collection-title">WOMEN'S TROUSERS COLLECTION</h2>
                <div className="womentrouser-grid">
                    {trousers.map((trouser) => (
                        <div key={trouser.id} className="womentrouser-item">
                            <div className="womentrouser-image-container">
                                <img
                                    src={trouser.image}
                                    alt={trouser.name}
                                    className="womentrouser-image"
                                />
                            </div>
                            <div className="womentrouser-details">
                                <h3 className="womentrouser-name">{trouser.name}</h3>
                                <p className="womentrouser-color">{trouser.color}</p>
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

export default Womentrouser;
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Womendenimjacket.css";
import women_classic_denim_medium_w from '../Assets/women_classic_denim_medium_w.png';
import Footer from "../Footerr/Footer,jsx";
import no1 from '../Women_DenimJacket/1.png'
import no2 from '../Women_DenimJacket/2.png'
import no3 from '../Women_DenimJacket/3.png'
import no4 from '../Women_DenimJacket/4.png'
import no5 from '../Women_DenimJacket/5.png'
import no6 from '../Women_DenimJacket/6.png'
import no7 from '../Women_DenimJacket/7.png'
import no8 from '../Women_DenimJacket/8.png'
import no9 from '../Women_DenimJacket/9.png'
import no10 from '../Women_DenimJacket/10.png'
const Womendenimjacket = () => {
    const navigate = useNavigate();

    // Women's denim jacket data
    const denimJackets = [
        { id: 1, name: "CLASSIC DENIM JACKET", color: "Medium Wash", fit: "Regular", image: no1 },
        { id: 2, name: "OVERSIZED DENIM JACKET", color: "Light Wash", fit: "Loose", image: no2 },
        { id: 3, name: "CROPPED DENIM JACKET", color: "Black", fit: "Short", image: no3},
        { id: 4, name: "DISTRESSED DENIM JACKET", color: "Dark Wash", fit: "Slim", image: no4 },
        { id: 5, name: "EMBROIDERED DENIM JACKET", color: "Light Blue", fit: "Regular", image: no5 },
        { id: 6, name: "SHERPA-LINED JACKET", color: "Medium Wash", fit: "Regular", image: no6 },
        { id: 7, name: "ACID WASH JACKET", color: "Vintage Wash", fit: "Regular", image: no7 },
        { id: 8, name: "BELTED DENIM JACKET", color: "White", fit: "Fitted", image:no8 },
        { id: 9, name: "PATCHWORK DENIM JACKET", color: "Multi-Color", fit: "Regular", image: no9 },
        { id: 10, name: "TRUCKER DENIM JACKET", color: "Dark Indigo", fit: "Classic", image: no10 }
    ];

    return (
        <>
            <div className="womendenimjacket-container">
                <h2 className="collection-title">WOMEN'S DENIM JACKETS</h2>
                <div className="womendenimjacket-grid">
                    {denimJackets.map((jacket) => (
                        <div key={jacket.id} className="womendenimjacket-item">
                            <div className="womendenimjacket-image-container">
                                <img
                                    src={jacket.image}
                                    alt={jacket.name}
                                    className="womendenimjacket-image"
                                />
                            </div>
                            <div className="womendenimjacket-details">
                                <h3 className="womendenimjacket-name">{jacket.name}</h3>
                                <p className="womendenimjacket-color">{jacket.color}</p>
                                <p className="womendenimjacket-fit">{jacket.fit}</p>
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

export default Womendenimjacket;
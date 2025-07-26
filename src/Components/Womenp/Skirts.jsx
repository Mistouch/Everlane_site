import React from "react";
import './Skirts.css';
import no1 from '../Women_Skirt/1.png'
import no2 from '../Women_Skirt/2.png'
import no3 from '../Women_Skirt/3.png'
import no4 from '../Women_Skirt/4.png'
import no5 from '../Women_Skirt/5.png'
import no6 from '../Women_Skirt/6.png'
import no7 from '../Women_Skirt/7.png'
import no8 from '../Women_Skirt/8.png'
import no9 from '../Women_Skirt/9.png'
import no10 from '../Women_Skirt/10.png'
import Footer from "../Footerr/Footer,jsx";
import {useNavigate} from "react-router-dom"; // Make sure to import Footer
const Skirts = () => {
    const navigate = useNavigate();
    const skirts = [
        {
            id: 1,
            name: "MINI SKIRT WITH SPLIT",
            color: "Black",
            image:no1
        },
        {
            id: 2,
            name: "MIDI PLEATED SKIRT",
            color: "Beige",
            image:no2
        },
        {
            id: 3,
            name: "DENIM MINI SKIRT",
            color: "Light Blue",
            image: no3
        },
        {
            id: 4,
            name: "LEATHER PENCIL SKIRT",
            color: "Black",
            image: no4
        },
        {
            id: 5,
            name: "FLORAL WRAP SKIRT",
            color: "Multicolor",
            image: no5
        },
        {
            id: 6,
            name: "SATIN MAXI SKIRT",
            color: "Black",
            image: no6
        },
        {
            id: 7,
            name: "COTTON TIERED SKIRT",
            color: "Orange",
            image: no7
        },
        {
            id: 8,
            name: "KNITTED MIDI SKIRT",
            color: "Cream",
            image: no8
        },
        {
            id: 9,
            name: "HIGH-WAISTED A-LINE",
            color: "Black",
            image: no9
        },
        {
            id: 10,
            name: "RUFFLED HEM SKIRT",
            color: "Pink",
            image: no10
        }
    ];

    return (
        <>
        <div className="skirts-container">
            <h2 className="collection-title">SKIRTS COLLECTION</h2>
            <div className="skirts-grid">
                {skirts.map((skirt) => (
                    <div key={skirt.id} className="skirt-item">
                        <div className="skirt-image-container">
                            <img
                                src={skirt.image}
                                alt={skirt.name}
                                className="skirt-image"
                            />
                        </div>
                        <div className="skirt-details">
                            <h3 className="skirt-name">{skirt.name}</h3>
                            <p className="skirt-color">{skirt.color}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
            <Footer/>
            </>
    );
};

export default Skirts;
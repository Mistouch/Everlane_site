import React from "react";
import Footer from "../Footerr/Footer,jsx";
import "./Menshirt.css"; // Make sure this import exists
import tee from '../Assets/Tee.png';
import no1 from '../Men_Tees/1.png'
import no3 from '../Men_Tees/3.png'
import no4 from '../Men_Tees/4.png'
import no5 from  '../Men_Tees/5.png'
import no6 from  '../Men_Tees/6.png'
import no7 from  '../Men_Tees/7.png'
import no8 from  '../Men_Tees/8.png'
import no9 from  '../Men_Tees/9.png'
import no10 from  '../Men_Tees/10.png'
import no11 from  '../Men_Tees/11.png'
import no12  from  '../Men_Tees/12.png'
import no13  from  '../Men_Tees/13.png'
import no14  from  '../Men_Tees/14.png'
import no15  from  '../Men_Tees/15.png'
import no16  from  '../Men_Tees/16.png'
import {useNavigate} from "react-router-dom";
const Menshirt = () => {
    const navigate = useNavigate();
    // Sample t-shirt data
    const tshirts = [
        { id: 1, name: "Classic White Tee", color: "White", image: no1 },
        { id: 2, name: "Black Premium Cotton", color: "Black", image: tee },
        { id: 3, name: "Navy Blue Stripe", color: "Navy",  image: no3 },
        { id: 4, name: "Heather Gray", color: "Gray", image: no4 },
        { id: 5, name: "Red V-Neck", color: "Red",  image: no5 },
        { id: 6, name: "Olive Green Basic", color: "Olive",  image: no6 },
        { id: 7, name: "Maroon Crewneck", color: "Maroon",  image: no7 },
        { id: 8, name: "Sky Blue Pocket", color: "Blue",  image: no8 },
        { id: 9, name: "Charcoal Heather", color: "Charcoal",  image: no9 },
        { id: 10, name: "Mustard Yellow", color: "Yellow",  image: no10 },
        { id: 11, name: "Forest Green", color: "Green", image: no11 },
        { id: 12, name: "Sandstone", color: "Tan",  image: no12 },
        { id: 13, name: "Burgundy", color: "Burgundy",  image: no13 },
        { id: 14, name: "Slate Gray", color: "Slate",  image: no14},
        { id: 15, name: "Coral Summer", color: "Coral",  image: no15 },
        { id: 15, name: "Polo", color: "Black",  image: no16 }

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

            <div className="full-width-footer">
                <Footer />
            </div>
            </>
    );
};

export default Menshirt;
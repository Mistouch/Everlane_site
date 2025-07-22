import React from 'react';
import './ShoesPage.css';
import Footer from "../Footerr/Footer,jsx";
import oxfordImage from '../Assets/oxford.jpeg';

const product = {
    id: 1,
    name: 'Classic Oxford',
    brand: 'LeatherCraft',
    price: 129.99,
    image: oxfordImage, // Use the imported image
    colors: ['Black', 'Brown'],
    rating: 4.7
};
const ShoesPage = () => {
    const leatherShoes = [
        {
            id: 1,
            name: 'Classic Oxford',
            brand: 'LeatherCraft',
            price: 129.99,
            image: oxfordImage,
            colors: ['Black', 'Brown'],
            rating: 4.7
        },
        {
            id: 2,
            name: 'Casual Loafers',
            brand: 'UrbanWalk',
            price: 89.99,
            image: oxfordImage,
            colors: ['Tan', 'Dark Brown'],
            rating: 4.5
        },
        {
            id: 3,
            name: 'Elegant Brogues',
            brand: 'GentleStep',
            price: 149.99,
            image: oxfordImage,
            colors: ['Black', 'Oxblood'],
            rating: 4.8
        },
        {
            id: 4,
            name: 'Chelsea Boots',
            brand: 'BootMasters',
            price: 119.99,
            image: oxfordImage,
            colors: ['Black', 'Dark Brown'],
            rating: 4.6
        }
    ];

    return (
        <div className="shoes-page">
            <header className="page-header">
                <h1>Premium Leather Shoes</h1>
                <p>Handcrafted for comfort and style</p>
            </header>

            <div className="shoes-grid">
                {leatherShoes.map((shoe) => (
                    <div key={shoe.id} className="shoe-card">
                        <div className="shoe-image">
                            <img src={shoe.image} alt={shoe.name} />
                            <span className="shoe-rating">★ {shoe.rating}</span>
                        </div>
                        <div className="shoe-info">
                            <h3>{shoe.name}</h3>
                            <p className="brand">{shoe.brand}</p>
                            <div className="color-options">
                                {shoe.colors.map((color, index) => (
                                    <span
                                        key={index}
                                        className="color-dot"
                                        style={{backgroundColor: color.toLowerCase().includes('black') ? '#000' :
                                                color.toLowerCase().includes('brown') ? '#8B4513' :
                                                    color.toLowerCase().includes('tan') ? '#D2B48C' :
                                                        color.toLowerCase().includes('oxblood') ? '#800020' : '#FFF'}}
                                    ></span>
                                ))}
                            </div>
                            <p className="price">${shoe.price.toFixed(2)}</p>
                        </div>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
};

export default ShoesPage;
import React from 'react';
import './ShoesPage.css';
import Footer from "../Footerr/Footer,jsx";
import oxfordImage from '../Assets/oxford.jpeg';
import {useNavigate} from "react-router-dom"; // Replace with actual images


const ShoesPage = () => {
    const navigate = useNavigate();

    // Sample data for Men's, Women's, and Kids' leather shoes
    const menShoes = [
        { id: 1, name: 'Classic Oxford', brand: 'LeatherCraft', image: oxfordImage, colors: ['Black', 'Brown'], rating: 4.7 },
        { id: 2, name: 'Casual Loafers', brand: 'UrbanWalk', image: oxfordImage, colors: ['Tan', 'Dark Brown'], rating: 4.5 },
        { id: 3, name: 'Elegant Brogues', brand: 'GentleStep', image: oxfordImage, colors: ['Black', 'Oxblood'], rating: 4.8 },
        { id: 4, name: 'Chelsea Boots', brand: 'BootMasters', image: oxfordImage, colors: ['Black', 'Dark Brown'], rating: 4.6 },
        { id: 5, name: 'Derby Shoes', brand: 'ClassicFit',  image: oxfordImage, colors: ['Black', 'Chestnut'], rating: 4.4 },
        { id: 6, name: 'Monk Strap', brand: 'VintageLeather',  image: oxfordImage, colors: ['Brown', 'Cognac'], rating: 4.7 },
        { id: 7, name: 'Chukka Boots', brand: 'RuggedStyle', image: oxfordImage, colors: ['Tan', 'Dark Brown'], rating: 4.3 },
        { id: 8, name: 'Driving Moccasins', brand: 'SoftStep', image: oxfordImage, colors: ['Black', 'Navy'], rating: 4.2 },
        { id: 9, name: 'Dress Boots', brand: 'FormalWear',  image: oxfordImage, colors: ['Black', 'Mahogany'], rating: 4.9 },
        { id: 10, name: 'Work Boots', brand: 'HeavyDuty',  image: oxfordImage, colors: ['Brown', 'Black'], rating: 4.5 }
    ];

    const womenShoes = [
        { id: 11, name: 'Elegant Pumps', brand: 'LadyStyle', image: oxfordImage, colors: ['Black', 'Nude'], rating: 4.6 },
        { id: 12, name: 'Ballet Flats', brand: 'ComfyWalk',  image: oxfordImage, colors: ['Red', 'Beige'], rating: 4.4 },
        { id: 13, name: 'Ankle Boots', brand: 'ChicTrend', image: oxfordImage, colors: ['Black', 'Taupe'], rating: 4.7 },
        { id: 14, name: 'Mary Janes', brand: 'VintageLady', image: oxfordImage, colors: ['Black', 'Burgundy'], rating: 4.5 },
        { id: 15, name: 'Slip-On Loafers', brand: 'UrbanChic',  image: oxfordImage, colors: ['Brown', 'White'], rating: 4.3 },
        { id: 16, name: 'Oxford Flats', brand: 'ClassySteps', image: oxfordImage, colors: ['Black', 'Pink'], rating: 4.6 },
        { id: 17, name: 'Knee-High Boots', brand: 'WinterGlam', image: oxfordImage, colors: ['Black', 'Brown'], rating: 4.8 },
        { id: 18, name: 'Stiletto Heels', brand: 'Glamorous', image: oxfordImage, colors: ['Red', 'Silver'], rating: 4.7 },
        { id: 19, name: 'Leather Mules', brand: 'CasualQueen', image: oxfordImage, colors: ['Black', 'Gold'], rating: 4.4 },
        { id: 20, name: 'Espadrilles', brand: 'SummerBreeze', image: oxfordImage, colors: ['White', 'Blue'], rating: 4.2 }
    ];

    const kidsShoes = [
        { id: 21, name: 'School Oxfords', brand: 'LittleSteps',  image: oxfordImage, colors: ['Black', 'Brown'], rating: 4.5 },
        { id: 22, name: 'Casual Sneakers', brand: 'ActiveKids',  image: oxfordImage, colors: ['Blue', 'Pink'], rating: 4.3 },
        { id: 23, name: 'Mary Jane Shoes', brand: 'TinyFeet',  image: oxfordImage, colors: ['Red', 'Black'], rating: 4.4 },
        { id: 24, name: 'Ankle Booties', brand: 'KidsTrend',  image: oxfordImage, colors: ['Brown', 'Grey'], rating: 4.6 },
        { id: 25, name: 'Loafers for Kids', brand: 'ComfyKids', image: oxfordImage, colors: ['Navy', 'Beige'], rating: 4.2 },
        { id: 26, name: 'Velcro Sneakers', brand: 'EasyWear', image: oxfordImage, colors: ['Black', 'White'], rating: 4.3 },
        { id: 27, name: 'Leather Sandals', brand: 'SummerKids',  image: oxfordImage, colors: ['Brown', 'Pink'], rating: 4.1 },
        { id: 28, name: 'Dress Shoes', brand: 'FormalKids',  image: oxfordImage, colors: ['Black', 'Patent Black'], rating: 4.7 },
        { id: 29, name: 'Rain Boots', brand: 'PlayfulKids',  image: oxfordImage, colors: ['Yellow', 'Green'], rating: 4.0 },
        { id: 30, name: 'Athletic Shoes', brand: 'SportyKids',  image: oxfordImage, colors: ['Blue', 'Red'], rating: 4.5 }
    ];

    return (
        <>
        <div className="shoes-page">
            <header className="page-header">
                <h1>Premium Leather Shoes</h1>
                <p>Handcrafted for comfort and style</p>
            </header>

            {/* Men's Shoes Section */}
            <section className="shoes-section">
                <h2>Men's Leather Shoes</h2>
                <div className="shoes-grid">
                    {menShoes.map((shoe) => (
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
                                                            color.toLowerCase().includes('oxblood') ? '#800020' :
                                                                color.toLowerCase().includes('nude') ? '#F5D0B9' :
                                                                    color.toLowerCase().includes('red') ? '#FF0000' :
                                                                        color.toLowerCase().includes('blue') ? '#0000FF' :
                                                                            color.toLowerCase().includes('white') ? '#FFFFFF' : '#FFF'}}
                                        ></span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Women's Shoes Section */}
            <section className="shoes-section">
                <h2>Women's Leather Shoes</h2>
                <div className="shoes-grid">
                    {womenShoes.map((shoe) => (
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
                                                    color.toLowerCase().includes('red') ? '#FF0000' :
                                                        color.toLowerCase().includes('beige') ? '#F5F5DC' :
                                                            color.toLowerCase().includes('taupe') ? '#483C32' :
                                                                color.toLowerCase().includes('burgundy') ? '#800020' :
                                                                    color.toLowerCase().includes('pink') ? '#FFC0CB' :
                                                                        color.toLowerCase().includes('gold') ? '#FFD700' :
                                                                            color.toLowerCase().includes('silver') ? '#C0C0C0' : '#FFF'}}
                                        ></span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Kids' Shoes Section */}
            <section className="shoes-section">
                <h2>Kids' Leather Shoes</h2>
                <div className="shoes-grid">
                    {kidsShoes.map((shoe) => (
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
                                                    color.toLowerCase().includes('blue') ? '#0000FF' :
                                                        color.toLowerCase().includes('pink') ? '#FFC0CB' :
                                                            color.toLowerCase().includes('grey') ? '#808080' :
                                                                color.toLowerCase().includes('navy') ? '#000080' :
                                                                    color.toLowerCase().includes('yellow') ? '#FFFF00' :
                                                                        color.toLowerCase().includes('green') ? '#008000' : '#FFF'}}
                                        ></span>
                                    ))}
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </section>


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

export default ShoesPage;
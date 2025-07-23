import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cosmetics.css';
import Footer from "../Footerr/Footer,jsx";
import Foundation from '../Assets/foundation.png';
import mate2 from '../Assets/lipp.jpg';
import Mascara from '../Assets/mascara.png';

const Cosmetics = () => {
    const navigate = useNavigate();

    // 20 Cosmetic Products (without prices)
    const cosmeticsItems = [
        { id: 1, name: 'Matte Lipstick', brand: 'BeautyGlow', image: mate2, rating: 4.5 },
        { id: 2, name: 'Hydrating Foundation', brand: 'SkinPerfect', image: Foundation, rating: 4.8 },
        { id: 3, name: 'Volume Mascara', brand: 'LashQueen', image: Mascara, rating: 4.2 },
        { id: 4, name: 'Blush Palette', brand: 'Cheeky', image: 'https://via.placeholder.com/300x300?text=Blush', rating: 4.7 },
        { id: 5, name: 'Eyeshadow Palette', brand: 'ColorPop', image: 'https://via.placeholder.com/300x300?text=Eyeshadow', rating: 4.9 },
        { id: 6, name: 'Highlighter Stick', brand: 'GlowUp', image: 'https://via.placeholder.com/300x300?text=Highlighter', rating: 4.4 },
        { id: 7, name: 'Liquid Eyeliner', brand: 'PrecisionLine', image: 'https://via.placeholder.com/300x300?text=Eyeliner', rating: 4.6 },
        { id: 8, name: 'Setting Spray', brand: 'FixIt', image: 'https://via.placeholder.com/300x300?text=Spray', rating: 4.7 },
        { id: 9, name: 'CC Cream', brand: 'TonePerfect', image: 'https://via.placeholder.com/300x300?text=CC+Cream', rating: 4.5 },
        { id: 10, name: 'Brow Pencil', brand: 'ArchIt', image: 'https://via.placeholder.com/300x300?text=Brow+Pencil', rating: 4.3 },
        { id: 11, name: 'Cleansing Balm', brand: 'PureSkin', image: 'https://via.placeholder.com/300x300?text=Cleanser', rating: 4.8 },
        { id: 12, name: 'Lip Gloss Set', brand: 'ShineOn', image: 'https://via.placeholder.com/300x300?text=Lip+Gloss', rating: 4.1 },
        { id: 13, name: 'Concealer', brand: 'HideAway', image: 'https://via.placeholder.com/300x300?text=Concealer', rating: 4.6 },
        { id: 14, name: 'Bronzer', brand: 'SunKissed', image: 'https://via.placeholder.com/300x300?text=Bronzer', rating: 4.4 },
        { id: 15, name: 'Makeup Remover', brand: 'FreshStart', image: 'https://via.placeholder.com/300x300?text=Remover', rating: 4.0 },
        { id: 16, name: 'Primer', brand: 'SmoothBase', image: 'https://via.placeholder.com/300x300?text=Primer', rating: 4.7 },
        { id: 17, name: 'Nail Polish Set', brand: 'Manicure', image: 'https://via.placeholder.com/300x300?text=Nail+Polish', rating: 4.2 },
        { id: 18, name: 'Face Mist', brand: 'DewDrop', image: 'https://via.placeholder.com/300x300?text=Facial+Mist', rating: 4.3 },
        { id: 19, name: 'Contour Kit', brand: 'Sculpted', image: 'https://via.placeholder.com/300x300?text=Contour', rating: 4.5 },
        { id: 20, name: 'Lip Liner', brand: 'DefineIt', image: 'https://via.placeholder.com/300x300?text=Lip+Liner', rating: 4.0 }
    ];

    return (
        <>
            <div className="cosmetics-page">
                <header className="page-header">
                    <h1>Our Premium Cosmetics</h1>
                    <p>Discover your perfect beauty match</p>
                </header>

                <div className="products-grid">
                    {cosmeticsItems.map((product) => (
                        <div key={product.id} className="product-card">
                            <div className="product-image">
                                <img src={product.image} alt={product.name} />
                                <span className="product-rating">★ {product.rating}</span>
                            </div>
                            <div className="product-info">
                                <h3>{product.name}</h3>
                                <p className="brand">{product.brand}</p>
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

export default Cosmetics;
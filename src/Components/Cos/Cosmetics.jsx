import React from 'react';
import './Cosmetics.css'; // Create this CSS file

const Cosmetics = () => {
    // Sample cosmetics data with image placeholders (replace with your actual images)
    const cosmeticsItems = [
        {
            id: 1,
            name: 'Matte Lipstick',
            brand: 'BeautyGlow',
            price: 14.99,
            image: 'https://via.placeholder.com/300x300?text=Lipstick',
            rating: 4.5
        },
        {
            id: 2,
            name: 'Hydrating Foundation',
            brand: 'SkinPerfect',
            price: 24.99,
            image: 'https://via.placeholder.com/300x300?text=Foundation',
            rating: 4.8
        },
        {
            id: 3,
            name: 'Volume Mascara',
            brand: 'LashQueen',
            price: 12.50,
            image: 'https://via.placeholder.com/300x300?text=Mascara',
            rating: 4.2
        },
        {
            id: 4,
            name: 'Blush Palette',
            brand: 'Cheeky',
            price: 18.99,
            image: 'https://via.placeholder.com/300x300?text=Blush',
            rating: 4.7
        }
    ];

    return (
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
                            <p className="price">${product.price.toFixed(2)}</p>
                            <button className="add-to-cart">Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cosmetics;
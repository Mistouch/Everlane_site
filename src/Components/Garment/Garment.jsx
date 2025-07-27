import React from 'react';
import './Garment.css';
import Footer from "../Footerr/Footer,jsx";
import { useNavigate } from 'react-router-dom';
import tee from '../Assets/Tee.png';

const Garment = () => {
    const navigate = useNavigate();
    const collections = {
        men: {
            title: "MEN'S COLLECTION",
            description: "Precision-crafted essentials for the modern man",
            categories: [
                { name: "T-Shirt", image: tee, desc: "Premium cotton with perfect drape", season: "Essential", path: "/men/tee" },
                { name: "Sweater", image: tee, desc: "Luxury knits for refined comfort", season: "Autumn-Winter", path: "/men/sweater" },
                { name: "Woven", image: tee, desc: "Structured shirts with tailored fit", season: "Year-Round", path: "/men/woven" },
                { name: "Denim Pant", image: tee, desc: "Engineered denim with premium washes", season: "Iconic", path: "/men/denimpant" },
                { name: "Denim Jacket", image: tee, desc: "Timeless silhouettes reimagined", season: "Heritage", path: "/men/denimjacket" },
                { name: "Lingerie", image: tee, desc: "Crafted comfort in breathable fabrics", season: "Essentials", path: "/men/lingerie" },
                { name: "Shoes", image: tee, desc: "Contemporary footwear with precision", season: "Complete The Look", path: "/Shoes" }
            ]
        },
        women: {
            title: "WOMEN'S COLLECTION",
            description: "Effortless elegance with couture-inspired details",
            categories: [
                { name: "T-Shirt", image: tee, desc: "Ultra-soft fabrics with feminine cuts", season: "Basic", path: "/women/tee" },
                { name: "Skirts", image: tee, desc: "Fluid movement with structured details", season: "Seasonal", path: "/women/skirts" },
                { name: "Woven", image: tee, desc: "Draped perfection in luxury fabrics", season: "Office", path: "/women/woven" },
                { name: "Sweater", image: tee, desc: "Cashmere blends for timeless warmth", season: "Winter", path: "/women/sweaters" },
                { name: "Denim Pant", image: tee, desc: "Body-conscious silhouettes", season: "Everyday", path: "/women/denimpants" },
                { name: "Denim Jacket", image: tee, desc: "Signature styles with modern edge", season: "Icon", path: "/women/denimjackets" },
                { name: "Blazers", image: tee, desc: "Sharp tailoring meets feminine drape", season: "Workwear", path: "/women/blazers" },
                { name: "Trouser", image: tee, desc: "Precision-cut for powerful silhouettes", season: "Tailored", path: "/women/trousers" },
                { name: "Lingerie", image: tee, desc: "Delicate craftsmanship meets comfort", season: "Intimates", path: "/women/lingerie" },
                { name: "Shoes", image: tee, desc: "Statement footwear with artisanal details", season: "Accessories", path: "/Shoes" },
                { name: "Makeup", image: tee, desc: "Beauty essentials for every look", season: "Beauty", path: "/Cosmetics" }
            ]
        },
        kids: {
            title: "KIDS COLLECTION",
            description: "Playful designs with premium comfort for young explorers",
            categories: [
                { name: "T-Shirt", image: tee, desc: "Organic cotton in vibrant prints", season: "Playtime", path: "/kids/tee" },
                { name: "Sweater", image: tee, desc: "Cozy knits for all adventures", season: "Winter", path: "/kids/sweater" },
                { name: "Woven", image: tee, desc: "Miniature tailoring with grown-up style", season: "School", path: "/kids/woven" },
                { name: "Denim Pant", image: tee, desc: "Durable styles for active kids", season: "Everyday", path: "/kids/denimpant" },
                { name: "Denim Jacket", image: tee, desc: "Iconic styles in child-friendly fits", season: "Weekend", path: "/kids/denimjacket" },
                { name: "Shoes", image: tee, desc: "Supportive designs with playful accents", season: "Essentials", path: "/Shoes" }
            ]
        }
    };

    return (
        <div className="garment-container">
            <div className="premium-header">
                <h1>THE ESSENTIAL EDIT</h1>
                <p className="subheader">CURATED COLLECTIONS · LUXURY FABRICS · TIMELESS SILHOUETTES</p>
                <div className="header-divider"></div>
                <p className="collection-intro">
                    Discover our meticulously crafted collections where contemporary design meets
                    exceptional comfort. Each piece is conceived with precision and an unwavering
                    attention to detail.
                </p>
            </div>

            {Object.entries(collections).map(([gender, collection]) => (
                <div className="gender-section" key={gender}>
                    <div className="collection-header">
                        <h2>{collection.title}</h2>
                        <p className="collection-description">{collection.description}</p>
                    </div>
                    <div className="category-grid">
                        {collection.categories.map((item, index) => (
                            <div
                                className="category-card"
                                key={`${gender}-${index}`}
                                onClick={() => navigate(item.path)}
                            >
                                <div className="image-container">
                                    <img src={item.image} alt={item.name} />
                                    <div className="hover-overlay">
                                        <p className="category-description">{item.desc}</p>
                                        <p className="season-tag">{item.season}</p>
                                        <button
                                            className="explore-btn"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigate(item.path);
                                            }}
                                        >
                                            EXPLORE
                                        </button>
                                    </div>
                                </div>
                                <div className="category-info">
                                    <h3>{item.name}</h3>
                                    <p className="view-products">View products →</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            <Footer />
        </div>
    );
};

export default Garment;
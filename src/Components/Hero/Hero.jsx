import React, { useEffect, useRef } from "react";
import  './Hero.css'
import videoFile from '../Assets/4622325-uhd_4096_2160_25fps.mp4';
import { Link } from "react-router-dom";
import Footer from "../Footerr/Footer,jsx";
import shoe_home from '../Assets/shoe_home.png';
import handcfraft_home from '../Assets/handcraft_home.png';
import garments_home from '../Assets/garments_home.png';
import cosmetics_home from '../Assets/cosmetics_home.png';

const Hero = () => {
    const companyLogos = [
        { id: 1, name: "Nike", logo: "https://logo.clearbit.com/nike.com" },
        { id: 2, name: "Adidas", logo: "https://logo.clearbit.com/adidas.com" },
        { id: 3, name: "Puma", logo: "https://logo.clearbit.com/puma.com" },
        { id: 4, name: "Under Armour", logo: "https://logo.clearbit.com/underarmour.com" },
        { id: 5, name: "Reebok", logo: "https://logo.clearbit.com/reebok.com" },
        { id: 6, name: "New Balance", logo: "https://logo.clearbit.com/newbalance.com" },
        { id: 7, name: "Levi's", logo: "https://logo.clearbit.com/levi.com" },
        { id: 8, name: "Zara", logo: "https://logo.clearbit.com/zara.com" },
        { id: 9, name: "H&M", logo: "https://logo.clearbit.com/hm.com" },
        { id: 10, name: "Uniqlo", logo: "https://logo.clearbit.com/uniqlo.com" },
        { id: 11, name: "Gap", logo: "https://logo.clearbit.com/gap.com" },
        { id: 12, name: "Tommy Hilfiger", logo: "https://logo.clearbit.com/tommy.com" },
    ];

    const headingRef = useRef(null);
    const subtitleRefs = useRef([]);
    const videoRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (headingRef.current) {
                headingRef.current.style.opacity = '1';
                headingRef.current.style.transform = 'translateY(0)';
            }

            subtitleRefs.current.forEach((ref, index) => {
                if (ref) {
                    ref.style.opacity = '1';
                    ref.style.transform = 'translateY(0)';
                }
            });
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="hero-container">
            {/* Hero Section */}
            <div className="hero">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="hero-video"
                >
                    <source src={videoFile} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="hero-overlay">
                    <div className="hero-content">
                        <h1 className="hero-main-title" ref={headingRef}>
                            Everlane BD
                        </h1>
                        <p className="hero-subtitle">
                            {[
                                "Elevating Style with Premium Apparel & Fashion",
                                "Fine Leather Shoes",
                                "Artisanal Handcrafted Treasures, and ",
                                "Premium Cosmetics"
                            ].map((text, index) => (
                                <span
                                    key={index}
                                    ref={el => subtitleRefs.current[index] = el}
                                    className="highlight"
                                    style={{
                                        opacity: 0,
                                        transform: 'translateY(20px)',
                                        transition: `all 0.6s ease-out ${0.3 + index * 0.15}s`,
                                        display: 'inline-block'
                                    }}
                                >
                                    {text}
                                    {index === 1 && <br />}
                                </span>
                            ))}
                        </p>
                    </div>
                </div>
            </div>

            {/* Intro Section */}
            <section className="intro-section">
                <div className="intro-container">
                    <h2 className="intro-title">About Everlane BD</h2>
                    <div className="title-divider"></div>
                    <p className="intro-text">
                        Discover timeless elegance with Everlane BD. We craft premium garments, exquisite leather footwear,
                        and unique accessories by blending traditional artistry with modern design.
                    </p>
                    <Link to="/about" className="intro-btn">
                        Learn More <span className="arrow">→</span>
                    </Link>
                </div>
            </section>

            {/* Product Categories Section */}
            <section className="categories-section">
                <div className="container">
                    <h2 className="section-title">Our Collections</h2>
                    <div className="title-divider"></div>

                    {/* Garments Category */}
                    <div className="category-item">
                        <div className="category-content">
                            <div
                                className="category-image garments-img"
                                style={{ backgroundImage: `url(${garments_home})` }}
                            ></div>
                            <div className="category-details">
                                <h3>Premium Garments</h3>
                                <div className="menswear-description">
                                    <p>Discover our curated menswear collection where craftsmanship meets contemporary
                                        design. Each piece blends sophistication with comfort, ensuring you look
                                        polished and feel confident for any occasion.</p>

                                    <ul className="features">
                                        <li><span className="feature-title">Premium Fabrics:</span> Luxurious cotton, linen & performance blends</li>
                                        <li><span className="feature-title">Precision Tailoring:</span> Flattering cuts for every physique</li>
                                        <li><span className="feature-title">Versatile Style:</span> Seamless day-to-night transitions</li>
                                        <li><span className="feature-title">Thoughtful Details:</span> Stretch panels & wrinkle-resistant finishes</li>
                                    </ul>

                                    <p>From boardroom meetings to special events, our collection balances timeless
                                        elegance with modern comfort—because great style should always feel
                                        effortless.</p>
                                </div>
                                <Link to="/garments" className="category-btn">
                                    Explore Collection <span className="arrow">→</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Shoes Category */}
                    <div className="category-item">
                        <div className="category-content">
                            <div
                                className="category-image shoes-img"
                                style={{ backgroundImage: `url(${shoe_home})` }}
                            ></div>
                            <div className="category-details">
                                <h3>Leather Shoes</h3>
                                <p className="lefootwear-description">
                                    Step into luxury with our handcrafted leather footwear, where timeless craftsmanship
                                    meets modern comfort. Each pair is meticulously constructed using premium hides and
                                    traditional techniques, developing a unique patina that improves with wear.
                                </p>
                                <Link to="/Shoes" className="category-btn">
                                    Explore Collection <span className="arrow">→</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Handcraft Category */}
                    <div className="category-item">
                        <div className="category-content">
                            <div
                                className="category-image handcraft-img"
                                style={{ backgroundImage: `url(${handcfraft_home})` }}
                            ></div>
                            <div className="category-details">
                                <h3>Artisanal Treasures</h3>
                                <p className="heritage-description">
                                    Each piece in our collection embodies centuries of cultural heritage,
                                    carrying forward artisanal traditions through every stitch and pattern.
                                </p>
                                <Link to="/handcraft" className="category-btn">
                                    Explore Collection <span className="arrow">→</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Cosmetics Category */}
                    <div className="category-item">
                        <div className="category-content">
                            <div
                                className="category-image cosmetics-img"
                                style={{ backgroundImage: `url(${cosmetics_home})` }}
                            ></div>
                            <div className="category-details">
                                <h3>Premium Cosmetics</h3>
                                <p className="beauty-description luxe">
                                    Indulge in our luxurious skincare, crafted with potent natural ingredients and
                                    scientifically-proven actives for transformative results.
                                </p>
                                <Link to="/Cosmetics" className="category-btn">
                                    Explore Collection <span className="arrow">→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partner Companies Section */}
            <section className="partners-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Esteemed Partners</h2>
                        <div className="title-divider"></div>
                    </div>

                    <div className="partners-container">
                        <div className="partners-track">
                            {[...companyLogos, ...companyLogos].map((company, index) => (
                                <div key={`${company.id}-${index}`} className="partner-card">
                                    <div className="logo-container">
                                        <img
                                            src={company.logo}
                                            alt={company.name}
                                            className="logo-img"
                                            onError={(e) => {
                                                e.target.src = `https://via.placeholder.com/150x75?text=${company.name.substring(0,2)}`;
                                                e.target.className = 'logo-img placeholder-logo';
                                            }}
                                        />
                                    </div>
                                    <div className="company-name">{company.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Hero;
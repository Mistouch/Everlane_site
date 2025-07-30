import React, { useEffect, useRef } from "react";
import  './Hero.css'
import videoFile from '../Assets/9760434-uhd_2732_1440_25fps.mp4';
import { Link } from "react-router-dom";
import Footer from "../Footerr/Footer,jsx";
import shoe_home from '../Assets/shoe_home.png';
import handcfraft_home from '../Assets/handcraft_home.png';
import garments_home from '../Assets/garments_home.png';
import cosmetics_home from '../Assets/cosmetics_home.png';
import Sector from "../Sectors/Sector";

const Hero = () => {
    const companyLogos = [
        { id: 1, name: "Walmart", logo: "https://logo.clearbit.com/walmart.com" },
        { id: 2, name: "KOHLS", logo: "https://logo.clearbit.com/kohls.com" },
        { id: 3, name: "NEXT", logo: "https://logo.clearbit.com/next.co.uk" },
        { id: 4, name: "JCPenney", logo: "https://logo.clearbit.com/jcpenney.com" },
        { id: 5, name: "Vertbaudet", logo: "https://logo.clearbit.com/vertbaudet.fr" },
        { id: 6, name: "MATALAN", logo: "https://logo.clearbit.com/matalan.co.uk" },
        { id: 7, name: "ZARA", logo: "https://logo.clearbit.com/zara.com" },
        { id: 8, name: "George", logo: "https://logo.clearbit.com/george.com" }, // George at ASDA
        { id: 9, name: "Macy's", logo: "https://logo.clearbit.com/macys.com" }, // Fixed typo from Xmacy's
        { id: 11, name: "Lee", logo: "https://logo.clearbit.com/lee.com" },
        { id: 12, name: "AEO", logo: "https://logo.clearbit.com/ae.com" }, // American Eagle Outfitters
        { id: 13, name: "Levi's", logo: "https://logo.clearbit.com/levi.com" },
        { id: 15, name: "Hurley", logo: "https://logo.clearbit.com/hurley.com" }, // Removed the 'x'
        { id: 16, name: "TAKKO", logo: "https://logo.clearbit.com/takko.com" },
        { id: 17, name: "COLIN'S", logo: "https://logo.clearbit.com/colins.com" },
        { id: 18, name: "Bershka", logo: "https://logo.clearbit.com/bershka.com" },
        { id: 19, name: "JACK&JONES", logo: "https://logo.clearbit.com/jackjones.com" },
        { id: 20, name: "NORDSTROM", logo: "https://logo.clearbit.com/nordstrom.com" },
        { id: 21, name: "AÉROPOSTALE", logo: "https://logo.clearbit.com/aeropostale.com" },
        { id: 22, name: "TRUTEX", logo: "https://logo.clearbit.com/trutex.com" }
    ];



// Note: Some brands may not have clearbit logos available. Alternatives:
// 1. Use local logo images
// 2. Use other logo API services
// 3. Find official SVG logos from brand websites

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
        <>
            
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
                    <source src="/video/vid.mp4" type="video/mp4" />
                    Your browser does not support this video.
                </video>


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
                        Learn More<span className="arrow">→</span>
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

                <Sector/>

            {/* Partner Companies Section */}
            <section className="partners-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Esteemed Partners</h2>
                        <div className="title-divider"></div>
                        <p className="section-subtitle">Trusted by leading brands worldwide</p>
                    </div>

                    <div className="partners-container">
                        <div className="partners-track">
                            {[...companyLogos].map((company, index) => {
                                // Define stringToColor function here
                                const stringToColor = (str, opacity = 1) => {
                                    let hash = 0;
                                    for (let i = 0; i < str.length; i++) {
                                        hash = str.charCodeAt(i) + ((hash << 5) - hash);
                                    }
                                    const hue = Math.abs(hash % 360);
                                    return `hsl(${hue}, 70%, 50%, ${opacity})`;
                                };

                                const brandColor = stringToColor(company.name);
                                const brandColorLight = stringToColor(company.name, 0.2);

                                return (
                                    <div
                                        key={`${company.id}-${index}`}
                                        className="partner-card"
                                        style={{
                                            '--brand-color': brandColor,
                                            '--brand-color-light': brandColorLight
                                        }}
                                    >
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
                                        <div className="brand-highlight"></div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>



        </div>

            <Footer />
            </>
    );
};

export default Hero;
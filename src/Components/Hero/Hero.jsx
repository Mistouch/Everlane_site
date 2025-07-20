import React, {useEffect, useRef} from "react";
import videoFile from '../Assets/4622325-uhd_4096_2160_25fps.mp4';
import './Hero.css';
import { Link } from "react-router-dom";

const Hero = () => {
    // Sample company logos (replace with actual imports)
    const companyLogos = [
        { id: 1, name: "Company 1" },
        { id: 2, name: "Company 2" },
        { id: 3, name: "Company 3" },
        { id: 4, name: "Company 4" },
        { id: 5, name: "Company 5" },
        { id: 6, name: "Company 6" },
    ];
    // Refs for animation
    const headingRef = useRef(null);
    const subtitleRefs = useRef([]);
    const videoRef = useRef(null);

    useEffect(() => {
        // Text animations
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
            <div className="hero">
                <video
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

            {/* Introductory Text Section */}
            <section className="intro-section">
                <div className="container">
                    <h2>About Everlane BD</h2>
                    <p>
                        Everlane BD is a premier lifestyle brand offering curated collections of high-quality garments,
                        exquisite leather footwear, handcrafted accessories, and premium cosmetics.
                        We blend traditional craftsmanship with contemporary design to bring you products
                        that stand the test of time.
                    </p>
                    <Link to="/about" className="see-more-btn">Learn More About Us</Link>
                </div>
            </section>

            {/* Product Categories Section */}
            <section className="categories-section">
                <div className="container">
                    <h2>Our Collections</h2>
                    <div className="categories-grid">
                        {/* Garments */}
                        <div className="category-card">
                            <div className="category-image garments-img"></div>
                            <h3>Premium Garments</h3>
                            <p>Elegant and comfortable clothing for every occasion</p>
                            <Link to="/garments" className="category-btn">Explore</Link>
                        </div>

                        {/* Shoes */}
                        <div className="category-card">
                            <div className="category-image shoes-img"></div>
                            <h3>Leather Shoes</h3>
                            <p>Handcrafted footwear made from finest materials</p>
                            <Link to="/shoes" className="category-btn">Explore</Link>
                        </div>

                        {/* Handcrafting */}
                        <div className="category-card">
                            <div className="category-image handcraft-img"></div>
                            <h3>Artisanal Treasures</h3>
                            <p>Unique handcrafted items with cultural heritage</p>
                            <Link to="/handcraft" className="category-btn">Explore</Link>
                        </div>

                        {/* Cosmetics */}
                        <div className="category-card">
                            <div className="category-image cosmetics-img"></div>
                            <h3>Premium Cosmetics</h3>
                            <p>Natural and luxurious beauty products</p>
                            <Link to="/cosmetics" className="category-btn">Explore</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partner Companies Section */}
            <section className="partners-section">
                <div className="container">
                    <h2>Our Esteemed Partners</h2>
                    <div className="partners-grid">
                        {companyLogos.map(company => (
                            <div key={company.id} className="partner-logo">
                                <div className="logo-placeholder">{company.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact-section">
                <div className="container">
                    <h2>Get In Touch</h2>
                    <div className="contact-info">
                        <div className="contact-details">
                            <h3>Contact Information</h3>
                            <p><i className="fas fa-map-marker-alt"></i> 123 Fashion Avenue, Dhaka, Bangladesh</p>
                            <p><i className="fas fa-phone"></i> +880 1234 567890</p>
                            <p><i className="fas fa-envelope"></i> info@everlanebd.com</p>
                            <p><i className="fas fa-clock"></i> Open: 9:00 AM - 8:00 PM (Everyday)</p>
                        </div>
                        <div className="contact-form">
                            <h3>Send Us a Message</h3>
                            <form>
                                <input type="text" placeholder="Your Name" required />
                                <input type="email" placeholder="Your Email" required />
                                <textarea placeholder="Your Message" required></textarea>
                                <button type="submit" className="submit-btn">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
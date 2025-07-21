import React from 'react';
import './Aboutus.css';
import Footer from "../Footerr/Footer,jsx";
const Aboutus = () => {
    return (
        <div className="about-us-container">
            <section className="about-hero">
                <div className="hero-content">
                    <h1 className="gradient-text">Our Story</h1>
                    <p className="hero-subtitle">Redefining Retail Branding Excellence Since Our Establishment</p>
                </div>
            </section>

            <section className="about-intro">
                <div className="container">
                    <div className="grid-layout">
                        <div className="content-block">
                            <h2>Who We Are</h2>
                            <div className="animated-underline"></div>
                            <p className="lead-text">
                                Everlane Fashions Limited was established with a goal of providing innovative solutions for Retail Branding and Information.
                            </p>
                            <p>
                                We respond very quickly to our customers' needs while continuously improving product quality and creating cost savings. We operate on the principle of <span className="highlight" style={{
                                color: '#1a73e8',               // Google blue
                                backgroundColor: 'rgba(26, 115, 232, 0.1)',  // 10% opacity blue
                                padding: '0.2em 0.4em',
                                borderRadius: '4px',
                                fontWeight: '600'
                            }}>
  "Best in quality, developed from customers' ideas"
</span>.
                            </p>
                            <p>
                                As a leading supplier of complete range of Garments Trims & Accessories in Bangladesh, we combine tradition with innovation to deliver exceptional value.
                            </p>
                        </div>
                        <div className="image-block">
                            <div className="floating-image"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mission-vision">
                <div className="container">
                    <div className="card-grid">
                        <div className="mission-card">
                            <div className="card-icon">🎯</div>
                            <h3>Our Mission</h3>
                            <p>
                                To deliver the highest level of quality, fastest services, and market-competitive prices. We ensure sustainability through repeat business achieved by complete customer satisfaction in timeliness, attention to detail, and service-minded attitudes.
                            </p>
                        </div>

                        <div className="vision-card">
                            <div className="card-icon">🔭</div>
                            <h3>Our Vision</h3>
                            <p>
                                To become a world-class Retail Branding company recognized for exceptional quality and services. We aim to set global standards in our industry while maintaining our commitment to innovation and customer-centric solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="strengths">
                <div className="container">
                    <h2 className="section-title">Our Core Strengths</h2>
                    <div className="strength-grid">
                        <div className="strength-item">
                            <div className="hexagon">
                                <span>🏭</span>
                            </div>
                            <h4>Experience</h4>
                            <p>Years of industry expertise delivering premium solutions</p>
                        </div>

                        <div className="strength-item">
                            <div className="hexagon">
                                <span>⭐</span>
                            </div>
                            <h4>Quality</h4>
                            <p>Uncompromising standards in every product</p>
                        </div>

                        <div className="strength-item">
                            <div className="hexagon">
                                <span>🧠</span>
                            </div>
                            <h4>Creativity</h4>
                            <p>Innovative solutions tailored to your needs</p>
                        </div>

                        <div className="strength-item">
                            <div className="hexagon">
                                <span>👥</span>
                            </div>
                            <h4>Team</h4>
                            <p>Skilled professionals across all operations</p>
                        </div>

                        <div className="strength-item">
                            <div className="hexagon">
                                <span>⚙️</span>
                            </div>
                            <h4>Technology</h4>
                            <p>State-of-the-art machinery and processes</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default Aboutus;
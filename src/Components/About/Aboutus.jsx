import React from 'react';
import './Aboutus.css';
import Footer from "../Footerr/Footer,jsx";

const Aboutus = () => {
    return (
        <div className="about-us-container">
            {/* Hero Section with Blue Gradient */}
            <section className="about-hero blue-hero">
                <div className="hero-overlay blue-overlay"></div>
                <div className="hero-content">
                    <h1 className="hero-title">Our Journey</h1>
                    <p className="hero-subtitle">Pioneering Retail Branding Solutions Since 2014</p>
                    <div className="scroll-indicator">
                        <span></span>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="about-intro blue-intro">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Who We Are</h2>
                        <div className="title-divider blue-divider"></div>
                    </div>
                    <div className="grid-layout">
                        <div className="content-block">
                            <p className="lead-text">
                                Everlane Fashions Limited emerged with a vision to transform retail branding through innovative solutions and unparalleled craftsmanship.
                            </p>
                            <p>
                                We blend time-honored expertise with cutting-edge technology to deliver products that exemplify both quality and sophistication. Our agility in responding to market demands and dedication to continuous refinement has established us as industry pioneers.
                            </p>
                            <blockquote className="blue-quote">
                                "Excellence in quality, inspired by our customers' vision"
                                <span className="quote-author">— Our Guiding Principle</span>
                            </blockquote>
                            <p>
                                As Bangladesh's foremost supplier of garment trims and accessories, we connect tradition with innovation to create exceptional value for international brands.
                            </p>
                        </div>
                        <div className="image-block">
                            <div className="floating-image blue-image">
                                <div className="image-overlay blue-image-overlay"></div>
                            </div>
                            <div className="awards-badge blue-badge">
                                <span>Industry Innovator Since 2014</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="mission-vision blue-mission">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Core Beliefs</h2>
                        <div className="title-divider blue-divider"></div>
                    </div>
                    <div className="card-grid">
                        <div className="mission-card blue-card">
                            <div className="card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                                </svg>
                            </div>
                            <h3>Our Mission</h3>
                            <p>
                                To consistently deliver unmatched quality, exceptional service, and superior value. We cultivate lasting partnerships through meticulous craftsmanship, timely delivery, and an uncompromising commitment to exceeding expectations.
                            </p>
                            <div className="card-decoration blue-decoration"></div>
                        </div>

                        <div className="vision-card blue-card">
                            <div className="card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M12 8v4l3 3"></path>
                                </svg>
                            </div>
                            <h3>Our Vision</h3>
                            <p>
                                To become the global standard in retail branding, recognized for our innovative solutions, exceptional quality, and client-focused philosophy. We aim to redefine industry benchmarks while honoring our legacy of excellence.
                            </p>
                            <div className="card-decoration blue-decoration"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Strengths Section */}
            <section className="strengths blue-strengths">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Our Advantages</h2>
                        <div className="title-divider blue-divider"></div>
                    </div>
                    <div className="strength-grid">
                        <div className="strength-item blue-item">
                            <div className="hexagon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
                                    <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
                                </svg>
                            </div>
                            <h4>Heritage</h4>
                            <p>Two decades of refined expertise in premium branding solutions</p>
                            <div className="strength-line blue-line"></div>
                        </div>

                        <div className="strength-item blue-item">
                            <div className="hexagon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                            </div>
                            <h4>Precision</h4>
                            <p>Exacting standards that meet global quality benchmarks</p>
                            <div className="strength-line blue-line"></div>
                        </div>

                        <div className="strength-item blue-item">
                            <div className="hexagon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                </svg>
                            </div>
                            <h4>Innovation</h4>
                            <p>Forward-thinking solutions designed to elevate your brand</p>
                            <div className="strength-line blue-line"></div>
                        </div>

                        <div className="strength-item blue-item">
                            <div className="hexagon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                            </div>
                            <h4>Collaboration</h4>
                            <p>A team of specialists committed to your success</p>
                            <div className="strength-line blue-line"></div>
                        </div>

                        <div className="strength-item blue-item">
                            <div className="hexagon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                    <line x1="8" y1="21" x2="16" y2="21"></line>
                                    <line x1="12" y1="17" x2="12" y2="21"></line>
                                </svg>
                            </div>
                            <h4>Technology</h4>
                            <p>Advanced processes ensuring consistent excellence</p>
                            <div className="strength-line blue-line"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder's Quote Section */}
            <section className="founder-quote blue-quote-section">
                <div className="container">
                    <div className="quote-container">
                        <blockquote>
                            In retail branding, we believe every detail tells your story. At Everlane, we don't just create products—we craft experiences that elevate brands.
                        </blockquote>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    );
};

export default Aboutus;
import React from 'react';
import './Contactn.css';
import { FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa';
import Footer from "../Footerr/Footer,jsx";

const Contactn = () => {
    return (
        <>
            <div className="contact-page">
                {/* Hero Section */}
                <div className="contact-hero">
                    <h1>CONTACT US</h1>
                    <h2>We're Here For You.</h2>
                    <p className="hero-description">
                        Fill out this form, and we'll be in touch to help solve your brand identification challenges
                        and discuss how to transform your business with time-level RFCs. Our team of experts is ready
                        to correctly work the RAX products and solutions you need to prepare your brand for the future.
                    </p>
                </div>

                {/* Main Content */}
                <div className="contact-content">
                    {/* Left Column - Contact Info */}
                    <div className="contact-info">
                        <h3>Our Dhaka Office</h3>
                        <div className="address">
                            <p>House 529 (1st Floor),</p>
                            <p>Road 10, Baridhara DOHS,</p>
                            <p>Dhaka, Bangladesh</p>
                        </div>
                        <div className="contact-details">
                            <div className="contact-item">
                                <FaEnvelope className="contact-icon" />
                                <div>
                                    <p>md@everlane-bd.com</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <FaPhone className="contact-icon" />
                                <div>
                                    <p>+80 01821238213</p>
                                </div>
                            </div>
                        </div>
                        <div className="contact-note">
                            <p>Feel free to contact with us</p>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="contact-form-wrapper">
                        <form className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" placeholder="Enter your name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone:</label>
                                <input type="tel" id="phone" placeholder="Enter your phone" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" placeholder="Enter your email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message:</label>
                                <textarea id="message" placeholder="Your message here"></textarea>
                            </div>
                            <button type="submit" className="submit-btn">
                                <FaPaperPlane className="btn-icon" />
                                SEND MESSAGE
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="full-width-footer">
                <Footer />
            </div>
        </>
    );
};

export default Contactn;
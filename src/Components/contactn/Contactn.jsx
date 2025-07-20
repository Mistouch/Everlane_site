import React from 'react';
import './Contactn.css'; // Updated CSS file name to match import
import {
    FaHome,
    FaRoad,
    FaMapMarkerAlt,
    FaEnvelope,
    FaPhone,
    FaGlobe,
    FaPaperPlane,
    FaLinkedin,
    FaFacebook,
    FaTwitter,
    FaInstagram
} from 'react-icons/fa';

const Contactn = () => {
    return (
        <div className="contact-container">
            <div className="hero-section">
                <h1>Get in Touch</h1>
                <p>We'd love to hear from you. Reach out to our Dhaka office or send us a message.</p>
            </div>

            <div className="content-row">
                {/* Left Column - Address and Information */}
                <div className="left-column">
                    <div className="info-card">
                        <h2>Our Dhaka Office</h2>

                        <div className="contact-item">
                            <div className="icon-circle">
                                <FaHome className="contact-icon" />
                            </div>
                            <div className="contact-text">
                                <p className="contact-label">Building</p>
                                <p>House # 529 (1st floor)</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="icon-circle">
                                <FaRoad className="contact-icon" />
                            </div>
                            <div className="contact-text">
                                <p className="contact-label">Street</p>
                                <p>Road # 10, Bairidhara DOHS</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="icon-circle">
                                <FaMapMarkerAlt className="contact-icon" />
                            </div>
                            <div className="contact-text">
                                <p className="contact-label">Location</p>
                                <p>Dhaka-1206, Bangladesh</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="icon-circle">
                                <FaEnvelope className="contact-icon" />
                            </div>
                            <div className="contact-text">
                                <p className="contact-label">Email</p>
                                <p>md@everlane-bd.com</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="icon-circle">
                                <FaPhone className="contact-icon" />
                            </div>
                            <div className="contact-text">
                                <p className="contact-label">Phone</p>
                                <p>+8801821238213</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="icon-circle">
                                <FaGlobe className="contact-icon" />
                            </div>
                            <div className="contact-text">
                                <p className="contact-label">Website</p>
                                <p>www.everlane-bd.com</p>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FaLinkedin />
                            </a>
                            <a href="https://www.facebook.com/zishan.sarkershuvo.5" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <FaFacebook />
                            </a>
                            <a href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <FaTwitter />
                            </a>
                            <a href="https://www.instagram.com/_mistouch/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Column - Map */}
                <div className="right-column">
                    <div className="map-card">
                        <h3>Find Us on Map</h3>
                        <div className="map-container">
                            <iframe
                                title="Dhaka Office Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.793316183012!2d90.4237753154315!3d23.7566890845878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9c9d8e9b9a5%3A0x4a1fe1f2a5b3f8c1!2sBairidhara%20DOHS%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1629300000000!5m2!1sen!2sbd"
                                width="100%"
                                height="100%"
                                style={{border:0}}
                                allowFullScreen=""
                                loading="lazy">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form Section */}
            <div className="contact-form-section">
                <div className="form-header">
                    <h2>Send us a message</h2>
                    <p>Have questions or want to discuss a project? Fill out the form below and we'll get back to you soon.</p>
                </div>

                <form className="contact-form">
                    <div className="form-grid">
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                placeholder="What's this about?"
                                required
                            />
                        </div>

                        <div className="form-group full-width">
                            <label htmlFor="message">Your Message</label>
                            <textarea
                                id="message"
                                rows="5"
                                placeholder="Write your message here..."
                                required
                            ></textarea>
                        </div>
                    </div>

                    <button type="submit" className="submit-btn">
                        <FaPaperPlane className="btn-icon" />
                        SEND MESSAGE
                    </button>
                </form>
            </div>

            <div className="footer">
                <p>© {new Date().getFullYear()} Everlane Bangladesh. All rights reserved.</p>
                <div className="footer-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Contact Us</a>
                </div>
            </div>
        </div>
    );
};

export default Contactn;
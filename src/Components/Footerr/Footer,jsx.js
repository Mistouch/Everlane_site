import React from 'react';
import { FaCcVisa, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                {/* Information Column */}
                <div className="footer-column">
                    <h4 className="footer-heading">Information</h4>
                    <ul className="footer-links">
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>

                {/* Legal Column */}
                <div className="footer-column">
                    <h4 className="footer-heading">Legal</h4>
                    <ul className="footer-links">
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/terms">Terms of Service</a></li>
                        <li><a href="/refund">Refund Policy</a></li>
                        <li><a href="/shipping">Shipping Policy</a></li>
                    </ul>
                </div>


                {/* Payment Methods Column */}
                <div className="footer-column">
                    <h4 className="footer-heading">You can pay by</h4>
                    <div className="payment-methods">
                        <FaCcVisa className="payment-icon" />
                        <div className="payment-text">VISA</div>
                        {/* Add more payment icons as needed */}
                    </div>
                </div>

                {/* Service Center Column */}
                <div className="footer-column">
                    <h4 className="footer-heading">Social contact</h4>
                    <div className="social-icons">
                        <a href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
                        <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
                        <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© EVERLANE. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
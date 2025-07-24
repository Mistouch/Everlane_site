import React from 'react';
import './Contactn.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaHeadset, FaBusinessTime } from 'react-icons/fa';
import { MdConnectWithoutContact } from 'react-icons/md';
import Footer from "../Footerr/Footer,jsx";

const Contactn = () => {
    return (
        <>
            <div className="contact-page">
                {/* Header Section with Gradient */}
                <div className="contact-header">
                    <div className="contact-header__overlay">
                        <h1 className="contact-header__title">Connect With Us</h1>
                        <h2 className="contact-header__subtitle">Your Gateway to Exceptional Service</h2>
                        <p className="contact-header__description">
                            At Everlane, we believe in building lasting relationships. Whether you have questions,
                            need support, or want to explore opportunities, our doors (and inboxes) are always open.
                        </p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="contact-content">
                    {/* Contact Information Section */}
                    <div className="contact-info-section">
                        <div className="contact-info-section__intro">
                            <MdConnectWithoutContact className="contact-info-section__icon" />
                            <h2 className="contact-info-section__heading">Multiple Ways to Reach Us</h2>
                            <p className="contact-info-section__text">Choose the method that works best for you - we're here to help.</p>
                        </div>

                        <div className="contact-methods">
                            <div className="contact-method">
                                <div className="contact-method__icon-container">
                                    <FaMapMarkerAlt className="contact-method__icon" />
                                </div>
                                <h3 className="contact-method__title">Our Headquarters</h3>
                                <div className="contact-method__address">
                                    <p>House 529 (1st Floor)</p>
                                    <p>Road 10, Baridhara DOHS</p>
                                    <p>Dhaka, Bangladesh</p>
                                </div>

                                <div className="contact-method__directions">
                                    <a
                                        href="https://maps.app.goo.gl/WfkkdTKNncVdYbqZ7"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="contact-method__directions-btn"
                                    >
                                        Get Directions
                                    </a>
                                </div>
                            </div>

                            <div className="contact-method">
                                <div className="contact-method__icon-container">
                                    <FaEnvelope className="contact-method__icon" />
                                </div>
                                <h3 className="contact-method__title">Email Correspondence</h3>
                                <div className="contact-method__details">
                                    <p><strong>General Inquiries:</strong> info@everlane-bd.com</p>
                                    <p><strong>Support:</strong> md@everlane-bd.com</p>
                                </div>
                            </div>

                            <div className="contact-method">
                                <div className="contact-method__icon-container">
                                    <FaPhone className="contact-method__icon" />
                                </div>
                                <h3 className="contact-method__title">Phone Communications</h3>
                                <div className="contact-method__details">
                                    <p><strong>Mobile: </strong> +880 01821238213</p>
                                </div>
                            </div>
                        </div>

                        {/* Additional Contact Info */}
                        <div className="additional-contact-info">
                            <div className="additional-contact-info__card">
                                <div className="additional-contact-info__icon">
                                    <FaClock />
                                </div>
                                <div>
                                    <h3 className="additional-contact-info__title">Business Hours</h3>
                                    <p>Sunday - Thursday: 9:00 AM - 5:00 PM</p>
                                    <p>Friday - Saturday: Closed</p>
                                    <p>Public Holidays: Closed</p>
                                </div>
                            </div>

                            <div className="additional-contact-info__card">
                                <div className="additional-contact-info__icon">
                                    <FaHeadset />
                                </div>
                                <div>
                                    <h3 className="additional-contact-info__title">Customer Support</h3>
                                    <p>24/7 Email Support</p>
                                    <p>Phone Support during business hours</p>
                                    <p>Average response time: 2 hours</p>
                                </div>
                            </div>

                            <div className="additional-contact-info__card">
                                <div className="additional-contact-info__icon">
                                    <FaBusinessTime />
                                </div>
                                <div>
                                    <h3 className="additional-contact-info__title">Appointments</h3>
                                    <p>Schedule a meeting with our team</p>
                                    <p>Virtual consultations available</p>
                                    <p>Corporate visits by arrangement</p>
                                </div>
                            </div>
                        </div>

                        {/* Company Philosophy */}
                        <div className="company-philosophy">
                            <h2 className="company-philosophy__heading">Our Communication Philosophy</h2>
                            <div className="company-philosophy__grid">
                                <div className="company-philosophy__point">
                                    <div className="company-philosophy__number">01</div>
                                    <h3 className="company-philosophy__title">Transparency</h3>
                                    <p className="company-philosophy__text">We believe in open, honest communication with no hidden agendas.</p>
                                </div>
                                <div className="company-philosophy__point">
                                    <div className="company-philosophy__number">02</div>
                                    <h3 className="company-philosophy__title">Responsiveness</h3>
                                    <p className="company-philosophy__text">Your time is valuable. We commit to timely responses to all inquiries.</p>
                                </div>
                                <div className="company-philosophy__point">
                                    <div className="company-philosophy__number">03</div>
                                    <h3 className="company-philosophy__title">Personalization</h3>
                                    <p className="company-philosophy__text">Every interaction is tailored to your specific needs and situation.</p>
                                </div>
                            </div>
                        </div>
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
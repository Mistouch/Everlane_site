import React from 'react';
import './Conatctn.css'; // We'll create this CSS file next
import { FaHome, FaRoad, FaMapMarkerAlt, FaEnvelope, FaPhone, FaGlobe } from 'react-icons/fa';
const Contactn = () => {
    return (
        <div className="contact-container">
            <h1>Our Dhaka Office</h1>

            <div className="content-row">
                {/* Left Column - Address and Information */}
                <div className="left-column">
                    <div className="address-section">
                        <div className="contact-item">
                            <FaHome className="contact-icon" />
                            <p>House # 349 (1st floor)</p>
                        </div>

                        <div className="contact-item">
                            <FaRoad className="contact-icon" />
                            <p>Road # 05, Bairidhara DOHS</p>
                        </div>

                        <div className="contact-item">
                            <FaMapMarkerAlt className="contact-icon" />
                            <p>Dhaka-1206, Bangladesh</p>
                        </div>

                        <div className="contact-item">
                            <FaEnvelope className="contact-icon" />
                            <p>nipu@orthodoxbd.com</p>
                        </div>

                        <div className="contact-item">
                            <FaPhone className="contact-icon" />
                            <p>+88 01911101496</p>
                        </div>

                        <div className="contact-item">
                            <FaGlobe className="contact-icon" />
                            <p>www.orthodoxbd.com</p>
                        </div>
                    </div>
                </div>

                {/* Right Column - Map */}
                <div className="right-column">
                    <div className="map-container">
                        <iframe
                            title="Dhaka Office Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.105693627629!2d90.41318931543199!3d23.78110179344687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a0e55f5a3f%3A0x4a1fe1f2a5b3f8c1!2sBir%20Uttam%20C.R.%20Datta%20Rd%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1629299999999!5m2!1sen!2sbd"
                            width="100%"
                            height="100%"
                            style={{border:0}}
                            allowFullScreen=""
                            loading="lazy">
                        </iframe>
                    </div>
                </div>
            </div>

            {/* Contact Form Section */}
            <div className="feedback-form-section">
                <h2>Feel free to give us your feedback</h2>

                <form 
                    className="feedback form"
                    onSubmit={(e)=>{
                        //e.preventDefault();
                        alert("Thank you for your feedback!");
                    }}
                >
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter Your Name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            placeholder="Enter Your Phone"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter Your Email"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            placeholder="Enter Your Subject"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            rows="4"
                            placeholder="Write Your Message"
                        ></textarea>
                    </div>

                    <button type="submit" className="submit-btn">SEND FEEDBACK</button>
                </form>
            </div>

            <div className="footer">
                <p>Made in Bangladesh</p>
                <p>Contact Us</p>
            </div>
        </div>
    );
};

export default Contactn;
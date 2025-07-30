import React from "react";
import "./OurConcerns.css";

// Import images
import empowermentImg from '../Concern_img/wom_em.png';
import businessImg from '../Concern_img/En_gr.png'
import ecoImg from '../Concern_img/eco.png'
import trustImg from '../Kid_Tees/3.png';
import communityImg from '../Concern_img/tranperency.png'
import customerImg from '../Concern_img/cou_com.png'
import Footer from "../Footerr/Footer,jsx";

const OurConcerns = () => {
    const concerns = [
        {
            title: "Women Empowerment",
            aim: "We aim to create equal opportunities",
            description: "Through leadership programs and skill development initiatives, we're breaking barriers for women across all sectors of society. Our mentorship networks and financial literacy programs help women achieve economic independence.",
            image: empowermentImg,
            color: "#8e44ad",
            icon: "♀️"
        },
        {
            title: "Entrepreneurial Growth",
            aim: "We aim to fuel innovative businesses",
            description: "Our incubator programs provide funding, workspace, and expert guidance to help new ventures thrive. We connect startups with industry leaders and investors to scale their operations.",
            image: businessImg,
            color: "#3498db",
            icon: "💼"
        },
        {
            title: "Environmental Stewardship",
            aim: "We aim to protect our planet",
            description: "From sustainable manufacturing to eco-friendly packaging solutions, we're reducing our environmental impact. Our initiatives promote renewable energy and responsible resource management.",
            image: ecoImg,
            color: "#27ae60",
            icon: "🌎"
        },
        {
            title: "Transparent Operations",
            aim: "We aim to build complete trust",
            description: "Through open communication and ethical business practices, we maintain accountability at every level. Our supply chain transparency initiatives set new industry standards.",
            image: trustImg,
            color: "#f39c12",
            icon: "🔍"
        },
        {
            title: "Community Development",
            aim: "We aim to strengthen communities",
            description: "By partnering with local organizations, we support education, healthcare, and cultural preservation. Our programs create jobs and improve quality of life in underserved areas.",
            image: communityImg,
            color: "#e74c3c",
            icon: "🏘️"
        },
        {
            title: "Customer Commitment",
            aim: "We aim to exceed expectations",
            description: "Every product undergoes rigorous quality testing to ensure exceptional standards. Our customer service team provides personalized support throughout your experience with us.",
            image: customerImg,
            color: "#34495e",
            icon: "🤝"
        }
    ];

    return (
        <>
            <section className="our-concerns-container">
                <div className="mission-header">
                    <h2 className="mission-title">Our Concerns & Commitments</h2>
                    <p className="mission-statement">
                        These are the core values that guide every decision we make and every action we take.
                    </p>
                    <div className="mission-divider"></div>
                </div>

                <div className="concerns-grid">
                    {concerns.map((item, index) => (
                        <article className="value-card" key={index}>
                            <div className="card-visual" style={{ backgroundImage: `url(${item.image})` }}>
                                <div className="color-overlay" style={{ backgroundColor: item.color }}></div>
                                <div className="value-icon">{item.icon}</div>
                            </div>

                            <div className="card-content">
                                <h3 style={{ color: item.color }}>{item.title}</h3>
                                <p className="aim-statement">{item.aim}</p>
                                <div className="description-box">
                                    <p>{item.description}</p>
                                </div>

                                <div className="progress-indicator">
                                    <span>Our Progress</span>
                                    <div className="progress-bar">
                                        <div
                                            className="progress-fill"
                                            style={{
                                                width: `${Math.floor(Math.random() * 30) + 70}%`,
                                                backgroundColor: item.color
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
};

export default OurConcerns;
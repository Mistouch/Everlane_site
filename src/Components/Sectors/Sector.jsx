import React from "react";
import "./Sector.css"
import txt from '../Assets/Textile.png'
const Sector = () => {
    const sectors = [
        {
            id: 1,
            title: "Sourcing",
            description: "Global procurement of premium materials and components with ethical supply chain management.",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 2,
            title: "Manufacturing",
            description: "State-of-the-art production facilities with lean manufacturing principles.",
            image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            title: "Textile",
            description: "Innovative fabric development and sustainable textile solutions.",
            image: txt
        },
        {
            id: 4,
            title: "Construction",
            description: "Modern construction techniques with focus on sustainable building practices.",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 5,
            title: "Hospitality Management",
            description: "Comprehensive hospitality services with emphasis on guest experience.",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 6,
            title: "Agro",
            description: "Sustainable agricultural practices and farm-to-table supply chains.",
            image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <div className="sectors-container">
            <header className="sectors-header">
                <h1>Our Business Sectors</h1>
                <p>Diverse expertise driving innovation across industries</p>
            </header>

            <div className="sectors-grid">
                {sectors.map((sector) => (
                    <div key={sector.id} className="sector-card">
                        <div className="sector-image-container">
                            <img
                                src={sector.image}
                                alt={sector.title}
                                className="sector-image"
                                loading="lazy"
                            />
                        </div>
                        <div className="sector-details">
                            <h3>{sector.title}</h3>
                            <p>{sector.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sector;
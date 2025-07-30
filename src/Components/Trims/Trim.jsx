import React from "react";
import "./Trim.css";
import Footer from "../Footerr/Footer,jsx";
import print_label from '../Trim_Pic/p_l.png'
import wl from '../Trim_Pic/wl.png'
import htl from '../Trim_Pic/htl.png'
import hgtg from '../Trim_Pic/wl.png'
import as from '../Trim_Pic/as.png'
import pc from '../Trim_Pic/pc.png'
import elastic from '../Trim_Pic/elastic.png'
import dc from '../Trim_Pic/drowcode.png'
import scr from '../Trim_Pic/scr.png'
import tt from '../Trim_Pic/tt.png'
import ds from '../Trim_Pic/ds.png'
import we from '../Trim_Pic/we.png'
import gt from '../Trim_Pic/Acessories/gum_tape.png'
import btn from '../Trim_Pic/Acessories/button.png'
import poly from '../Trim_Pic/Acessories/poly.png'
import hanl from '../Trim_Pic/Acessories/Hangerloop.png'
import mob_t from '../Trim_Pic/Acessories/mobilon_tape.png'
import slca from '../Trim_Pic/Acessories/silica.png'
import elt from '../Trim_Pic/Acessories/eliet.png'
import nb from '../Trim_Pic/Acessories/neck_bord.png'
import tlp from '../Trim_Pic/Acessories/tag_loc_pin.png'
import bb from '../Trim_Pic/Acessories/back_bord.png'
import tp from '../Trim_Pic/Acessories/tissue_paper.png'
import lp from '../Trim_Pic/Acessories/leatehr_patch.png'
import mf from '../Trim_Pic/Acessories/mesh_feb.png'
import stp from '../Trim_Pic/Acessories/stoper.png'
import cs from '../Trim_Pic/Acessories/collar_stay.png'
import cb from '../Trim_Pic/Acessories/collar_band.png'
import btf from '../Trim_Pic/Acessories/butterfly.png'
import vt from '../Trim_Pic/Acessories/vecro_tape.png'
import ppc from '../Trim_Pic/Acessories/poping_cord.png'
import str from '../Trim_Pic/Acessories/strings.png'
const Trim = () => {

    // Company logos data
    const companyLogos = [
        { id: 1, name: "Walmart", logo: "https://logo.clearbit.com/walmart.com" },
        { id: 2, name: "KOHLS", logo: "https://logo.clearbit.com/kohls.com" },
        { id: 3, name: "NEXT", logo: "https://logo.clearbit.com/next.co.uk" },
        { id: 4, name: "JCPenney", logo: "https://logo.clearbit.com/jcpenney.com" },
        { id: 5, name: "Vertbaudet", logo: "https://logo.clearbit.com/vertbaudet.fr" },
        { id: 6, name: "MATALAN", logo: "https://logo.clearbit.com/matalan.co.uk" },
        { id: 7, name: "ZARA", logo: "https://logo.clearbit.com/zara.com" },
        { id: 8, name: "George", logo: "https://logo.clearbit.com/george.com" }, // George at ASDA
        { id: 9, name: "Macy's", logo: "https://logo.clearbit.com/macys.com" }, // Fixed typo from Xmacy's
        { id: 11, name: "Lee", logo: "https://logo.clearbit.com/lee.com" },
        { id: 12, name: "AEO", logo: "https://logo.clearbit.com/ae.com" }, // American Eagle Outfitters
        { id: 13, name: "Levi's", logo: "https://logo.clearbit.com/levi.com" },
        { id: 15, name: "Hurley", logo: "https://logo.clearbit.com/hurley.com" }, // Removed the 'x'
        { id: 16, name: "TAKKO", logo: "https://logo.clearbit.com/takko.com" },
        { id: 17, name: "COLIN'S", logo: "https://logo.clearbit.com/colins.com" },
        { id: 18, name: "Bershka", logo: "https://logo.clearbit.com/bershka.com" },
        { id: 19, name: "JACK&JONES", logo: "https://logo.clearbit.com/jackjones.com" },
        { id: 20, name: "NORDSTROM", logo: "https://logo.clearbit.com/nordstrom.com" },
        { id: 21, name: "AÉROPOSTALE", logo: "https://logo.clearbit.com/aeropostale.com" },
        { id: 22, name: "TRUTEX", logo: "https://logo.clearbit.com/trutex.com" }
    ];

    // Factory staff data
    const factoryStaff = [
        { number: "12", label: "Management Staff" },
        { number: "05", label: "Technical Staff" },
        { number: "10", label: "Quality Assurance Staff" },
        { number: "10", label: "Supervising Staff" },
        { number: "50", label: "Operators" },
        { number: "25", label: "Assistants" },
        { number: "2", label: "Shifts Per Day (8hr each)" }
    ];

    // Product categories data
    const productCategories = [
        {
            title: "Labels",
            items: [
                { name: "Printed Labels", image: print_label },
                { name: "Woven Labels", image: wl },
                { name: "Heat Transfer Labels", image: htl }
            ]
        },
        {
            title: "Offset Printing",
            items: [
                { name: "Hangtags", image: hgtg },
                { name: "Adhesive Stickers", image: as },
                { name: "Photo Cards", image: pc }
            ]
        },
        {
            title: "Twill Tape & Elastic",
            items: [
                { name: "Elastic", image: elastic },
                { name: "Drawcord", image:dc },
                { name: "Satin & Cotton Ribbon", image:scr },
                { name: "Twill Tape", image: tt },
                { name: "Drawstring", image: ds },
                { name: "Woven Elastic", image: we }
            ]
        },
        {
            title: "Accessories",
            items: [
                { name: "Gum Tape", image: gt },
                { name: "Button", image: btn },
                { name: "Poly", image: poly },
                { name: "Hanger Loop", image: hanl },
                { name: "Mobilon Tape", image: mob_t },
                { name: "Silica Gel", image:slca },
                { name: "Super Dry", image: elt },
                { name: "Eyelet", image: elt },
                { name: "Neck Board", image: nb },
                { name: "Tag/Lock Pin", image:tlp },
                { name: "Back Board", image: bb },
                { name: "Tissue Paper", image: tp },
                { name: "Leather Patch", image: lp },
                { name: "Mash Fabrics", image: mf },
                { name: "Stopper", image: stp },
                { name: "Collar Stay", image: cs },
                { name: "Collar Band", image: cb },
                { name: "Butterfly", image:btf },
                { name: "Velcro Tape", image: vt },
                { name: "Piping Cord", image: ppc },
                { name: "Strings", image: str }
            ]
        }
    ];

    return (
        <>
            <div className="trim-container">
                {/* Hero Section */}
                <section className="hero-section">
                    <h1>Premium Trims & Accessories for the Fashion Industry</h1>
                    <p className="hero-subtitle">
                        Since 2005, we've been crafting high-quality garment components that elevate apparel
                        from ordinary to exceptional. Our trims are trusted by leading global brands.
                    </p>
                </section>

                {/* Factory Section */}
                <section className="section factory-section">
                    <h2>Our Manufacturing Excellence</h2>
                    <p className="section-intro">
                        Operating from our 15,000 sq. ft. facility in [Location], we combine traditional
                        craftsmanship with modern technology to produce over 2 million trim units monthly.
                    </p>
                    <div className="section-content">
                        <div className="stats-grid">
                            {factoryStaff.map((staff, index) => (
                                <div key={index} className="stat-item">
                                    <span className="stat-number">{staff.number}</span>
                                    <span className="stat-label">{staff.label}</span>
                                </div>
                            ))}
                        </div>
                        <div className="quality-statement">
                            <p>
                                All products undergo rigorous quality checks at multiple stages to ensure
                                compliance with international standards including OEKO-TEX® and REACH.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Working With Section */}
                <section className="section working-with-section">
                    <h2>Trusted By Global Brands</h2>
                    <p className="section-subtitle">
                        We're proud to be the trim supplier of choice for these industry leaders, helping
                        them create products that stand out in competitive markets.
                    </p>
                    <div className="logo-showcase">
                        {companyLogos.map((company) => (
                            <div key={company.id} className="logo-card">
                                <img
                                    src={company.logo}
                                    alt={company.name}
                                    className="brand-logo"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = '/fallback-logo.png';
                                    }}
                                />
                                <span className="brand-name">{company.name}</span>
                            </div>
                        ))}
                    </div>
                    <div className="client-testimonial">
                        <blockquote>
                            "Their attention to detail and consistent quality makes them our go-to trim supplier.
                            The woven labels have significantly enhanced our brand presentation."
                            <cite>— Senior Product Manager, Leading Denim Brand</cite>
                        </blockquote>
                    </div>
                </section>

                {/* Products Section */}
                <section className="section products-section">
                    <h2>Comprehensive Trim Solutions</h2>
                    <p className="section-intro">
                        From basic functional components to premium decorative elements, our 200+ product
                        range covers all apparel trim needs with customization options available.
                    </p>

                    {productCategories.map((category, index) => (
                        <div key={index} className="product-category">
                            <h3>{category.title}</h3>
                            <p className="category-description">
                                {category.title === "Labels" &&
                                    "Enhance brand identity with our durable labeling solutions that withstand 50+ washes while maintaining clarity."}
                                {category.title === "Offset Printing" &&
                                    "High-definition printing on various materials for hangtags and packaging that tell your brand story."}
                                {category.title === "Twill Tape & Elastic" &&
                                    "Functional yet stylish tapes and elastics available in custom widths, colors, and compositions."}
                                {category.title === "Accessories" &&
                                    "The finishing touches that make the difference - from practical fasteners to decorative elements."}
                            </p>
                            <div className="product-grid">
                                {category.items.map((product, idx) => (
                                    <div key={idx} className="product-card">
                                        <div className="product-image-container">
                                            <img src={product.image} alt={product.name} />
                                        </div>
                                        <p className="product-name">{product.name}</p>
                                        <div className="product-overlay">
                                            <p className="product-specs">
                                                {product.name.includes("Label") && "100% polyester | Custom sizes | Wash-resistant"}
                                                {product.name.includes("Elastic") && "Latex-free | Various widths | Excellent recovery"}
                                                {product.name.includes("Button") && "Natural/material options | Custom molds available"}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </section>

                {/* Sustainability Section */}
                <section className="section sustainability-section">
                    <h2>Responsible Manufacturing</h2>
                    <div className="sustainability-grid">
                        <div className="sustainability-card">
                            <h3>Eco-Friendly Materials</h3>
                            <p>
                                30% of our products now use recycled materials, with a roadmap to reach
                                50% by 2025.
                            </p>
                        </div>
                        <div className="sustainability-card">
                            <h3>Reduced Waste</h3>
                            <p>
                                Through lean manufacturing, we've reduced material waste by 22% since 2020
                                and recycle 95% of production byproducts.
                            </p>
                        </div>
                        <div className="sustainability-card">
                            <h3>Ethical Labor</h3>
                            <p>
                                Fair wages, safe working conditions, and no child labor - we're proud to
                                be SMETA audited and comply with all international labor standards.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Trim;
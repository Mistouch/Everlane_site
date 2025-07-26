import React, { useState } from "react";
import './Navbar.css';
import logo from '../Assets/logoo.jpg';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState("Home");
    const [showMenDropdown, setShowMenDropdown] = useState(false);
    const [showWomenDropdown, setShowWomenDropdown] = useState(false);
    const [showKidsDropdown, setShowKidsDropdown] = useState(false);
    const [showConcernsDropdown, setShowConcernsDropdown] = useState(false);
    const [showTrimsDropdown, setShowTrimsDropdown] = useState(false);

    // Categories data
    const categories = {
        men: [
            { name: "T-Shirt", path: "/men/tee" },
            { name: "Sweater", path: "/men/sweater" },
            { name: "Woven", path: "/men/woven" },
            { name: "Denim Pant", path: "/men/denimpant" },
            { name: "Denim Jacket", path: "/men/denimjacket" },
            { name: "Lingerie", path: "/men/lingerie" }
        ],
        women: [
            // Tops
            { name: "T-Shirts", path: "/women/tee", segment: "Tops" },

            { name: "Woven", path: "/women/woven", segment: "Tops" },
            { name: "Skirts", path: "/women/skirts", segment: "Tops" },

            // Knitwear
            { name: "Sweaters", path: "/women/sweaters", segment: "Knitwear" },

            // Outerwear
            { name: "Denim Jackets", path: "/women/denimjackets", segment: "Outerwear" },
            { name: "Blazers", path: "/women/blazers", segment: "Outerwear" },

            // Bottoms
            { name: "Denim Pants", path: "/women/denimpants", segment: "Bottoms" },
            { name: "Trousers", path: "/women/trousers", segment: "Bottoms" },

            // Dresses
            { name: "Dresses", path: "/women/dresses", segment: "Dresses" },

            // Lingerie
            { name: "Lingerie", path: "/women/lingerie", segment: "Lingerie" }
        ],
        kids: [
            { name: "T-Shirt", path: "/kids/tee" },
            { name: "Sweater", path: "/kids/sweater" },
            { name: "Woven", path: "/kids/woven" },
            { name: "Denim Pant", path: "/kids/denimpant" },
            { name: "Denim Jacket", path: "/kids/denimjacket" }
        ],
        concerns: [
            { name: "Sustainability", path: "/concerns/sustainability" },
            { name: "Ethical Sourcing", path: "/concerns/ethical-sourcing" },
            { name: "Quality Assurance", path: "/concerns/quality-assurance" }
        ],
        trims: [
            { name: "Buttons", path: "/trims/buttons" },
            { name: "Zippers", path: "/trims/zippers" },
            { name: "Labels", path: "/trims/labels" },
            { name: "Threads", path: "/trims/threads" }
        ]
    };

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img
                    src={logo}
                    alt="Everlane Logo"
                    style={{
                        height: '50px',
                        width: 'auto'
                    }}
                />
                <div className="logo-text">
                    <p className="brand-name">EVERLANE BD</p>
                    <p className="brand-motto">Radical Transparency. Ethical Fashion.</p>
                </div>
            </div>
            <ul className='nav-menu'>
                <li className="nav-item">
                    <NavLink
                        to="/"
                        className={({ isActive }) => {
                            if (isActive) setMenu("Home");
                            return `nav-link ${isActive ? 'active' : ''}`;
                        }}
                        style={{ textDecoration: 'none' }}
                    >
                        Home
                    </NavLink>
                </li>

                <li
                    className="nav-item dropdown"
                    onMouseEnter={() => setShowMenDropdown(true)}
                    onMouseLeave={() => setShowMenDropdown(false)}
                >
                    <NavLink
                        to="/men"  // Base path for the Men section
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        style={{ cursor: 'pointer' }}  // Changed from 'default' to 'pointer'
                        onClick={() => setMenu("Men")}  // Add click handler to set active state
                    >
                        MAN
                    </NavLink>
                    {showMenDropdown && (
                        <div className="dropdown-menu">
                            {categories.men.map((category) => (
                                <NavLink
                                    key={`men-${category.name}`}
                                    to={category.path}
                                    className="dropdown-item"
                                    onClick={() => setShowMenDropdown(false)}
                                >
                                    {category.name}
                                </NavLink>
                            ))}
                        </div>
                    )}
                </li>

                <li
                    className="nav-item dropdown"
                    onMouseEnter={() => setShowWomenDropdown(true)}
                    onMouseLeave={() => setShowWomenDropdown(false)}
                >
                    <NavLink
                        to="/women"  // Base path for the Men section
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        style={{ cursor: 'pointer' }}  // Changed from 'default' to 'pointer'
                        onClick={() => setMenu("Women")}  // Add click handler to set active state
                    >
                        WOMAN
                    </NavLink>
                    {showWomenDropdown && (
                        <div className="dropdown-menu">
                            {categories.women.map((category) => (
                                <NavLink
                                    key={`women-${category.name}`}
                                    to={category.path}
                                    className="dropdown-item"
                                    onClick={() => {
                                        setShowWomenDropdown(false);
                                        setMenu("Women");
                                    }}
                                >
                                    {category.name}
                                </NavLink>
                            ))}
                        </div>
                    )}
                </li>

                <li
                    className="nav-item dropdown"
                    onMouseEnter={() => setShowKidsDropdown(true)}
                    onMouseLeave={() => setShowKidsDropdown(false)}
                >
                    <NavLink
                        to="/kids"  // Base path for the Men section
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        style={{ cursor: 'pointer' }}  // Changed from 'default' to 'pointer'
                        onClick={() => setMenu("Kids")}  // Add click handler to set active state
                    >
                        KIDS
                    </NavLink>
                    {showKidsDropdown && (
                        <div className="dropdown-menu">
                            {categories.kids.map((category) => (
                                <NavLink
                                    key={`kids-${category.name}`}
                                    to={category.path}
                                    className="dropdown-item"
                                    onClick={() => {
                                        setShowKidsDropdown(false);
                                        setMenu("Kids");
                                    }}
                                >
                                    {category.name}
                                </NavLink>
                            ))}
                        </div>
                    )}
                </li>

                {/* Our Concerns Dropdown */}
                <li
                    className="nav-item dropdown"
                    onMouseEnter={() => setShowConcernsDropdown(true)}
                    onMouseLeave={() => setShowConcernsDropdown(false)}
                >
                    <NavLink
                        to="/concerns"  // Base path for the Men section
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        style={{ cursor: 'pointer' }}  // Changed from 'default' to 'pointer'
                        onClick={() => setMenu("Concerns")}  // Add click handler to set active state
                    >
                        Our Concerns
                    </NavLink>
                    {showConcernsDropdown && (
                        <div className="dropdown-menu">
                            {categories.concerns.map((category) => (
                                <NavLink
                                    key={`concerns-${category.name}`}
                                    to={category.path}
                                    className="dropdown-item"
                                    onClick={() => {
                                        setShowConcernsDropdown(false);
                                        setMenu("Concerns");
                                    }}
                                >
                                    {category.name}
                                </NavLink>
                            ))}
                        </div>
                    )}
                </li>

                {/* Trims Dropdown */}
                <li
                    className="nav-item dropdown"
                    onMouseEnter={() => setShowTrimsDropdown(true)}
                    onMouseLeave={() => setShowTrimsDropdown(false)}
                >
                    <NavLink
                        to="/trims"  // Base path for the Men section
                        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                        style={{ cursor: 'pointer' }}  // Changed from 'default' to 'pointer'
                        onClick={() => setMenu("Trims")}  // Add click handler to set active state
                    >
                       Trims
                    </NavLink>
                    {showTrimsDropdown && (
                        <div className="dropdown-menu">
                            {categories.trims.map((category) => (
                                <NavLink
                                    key={`trims-${category.name}`}
                                    to={category.path}
                                    className="dropdown-item"
                                    onClick={() => {
                                        setShowTrimsDropdown(false);
                                        setMenu("Trims");
                                    }}
                                >
                                    {category.name}
                                </NavLink>
                            ))}
                        </div>
                    )}
                </li>

                <li className="nav-item">
                    <NavLink
                        to="/about"
                        className={({ isActive }) => {
                            if (isActive) setMenu("abouts");
                            return `nav-link ${isActive ? 'active' : ''}`;
                        }}
                        style={{ textDecoration: 'none' }}
                    >
                        About Us
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => {
                            if (isActive) setMenu("contacts");
                            return `nav-link ${isActive ? 'active' : ''}`;
                        }}
                        style={{ textDecoration: 'none' }}
                    >
                        Contact Us
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
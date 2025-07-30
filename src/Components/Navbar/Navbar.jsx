import React, { useState } from "react";
import './Navbar.css';
import logo from '../Assets/logoo.jpg';
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";
const Navbar = () => {
    const letters = "EVERLANE BD".split("");
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
            { name: "Lingerie", path: "/men/lingerie" },
            { name: "Shoes", path: "/men/shoes" }
        ],
        women: [
            // Tops
            { name: "Tops", path: "/women/tee", segment: "Tops" },

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

            // Lingerie
            { name: "Lingerie", path: "/women/lingerie", segment: "Lingerie" },
            { name: "Shoes", path: "/women/shoes", segment: "Shoe" },
            { name: "Premium Cosmetics", path: "/women/makeup", segment: "MakeUp" }
        ],
        kids: [
            { name: "T-Shirt", path: "/kids/tee" },
            { name: "Sweater", path: "/kids/sweater" },
            { name: "Woven", path: "/kids/woven" },
            { name: "Denim Pant", path: "/kids/denimpant" },
            { name: "Denim Jacket", path: "/kids/denimjacket" },
            { name: "Shoes", path: "/kids/shoes" }
        ]
    };

    return (
        <div className='navbar'>


            <div className='nav-logo'>
                <img
                    src={logo}
                    alt="Everlane Logo"
                    style={{ height: '50px', width: 'auto' }}
                />
                <div className="logo-text">
                    <motion.div
                        style={{ display: 'flex', overflow: 'hidden' }}
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.08, // Delay between each letter
                                    delayChildren: 0.2,    // Initial delay before animation starts
                                },
                            },
                        }}
                    >
                        {letters.map((letter, index) => (
                            <motion.span
                                key={index}
                                style={{
                                    fontSize: '24px',
                                    fontWeight: 'bold',
                                    color: '#000',
                                    display: 'inline-block'
                                }}
                                variants={{
                                    hidden: {
                                        y: 20,   // Starts slightly below
                                        opacity: 0
                                    },
                                    visible: {
                                        y: 0,    // Slides up to position
                                        opacity: 1,
                                        transition: {
                                            type: "spring",
                                            damping: 12,
                                            stiffness: 200
                                        },
                                    },
                                }}
                            >
                                {letter === ' ' ? '\u00A0' : letter}
                            </motion.span>
                        ))}
                    </motion.div>

                    <motion.p
                        className="brand-motto"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        style={{ fontSize: '14px', margin: '4px 0 0 0', color: '#212121' }}
                    >
                        Elevating Style with Premium Apparel & Fashion.
                    </motion.p>
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

                <li className="nav-item">
                    <NavLink
                        to="/trims"
                        className={({ isActive }) => {
                            if (isActive) setMenu("trims");
                            return `nav-link ${isActive ? 'active' : ''}`;
                        }}
                        style={{ textDecoration: 'none' }}
                    >
                        Trims
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/concerns"
                        className={({ isActive }) => {
                            if (isActive) setMenu("concerns");
                            return `nav-link ${isActive ? 'active' : ''}`;
                        }}
                        style={{ textDecoration: 'none' }}
                    >
                       Our concerns
                    </NavLink>
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
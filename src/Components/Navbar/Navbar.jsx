import React, { useState } from "react";
import './Navbar.css';
import logo from '../Assets/logoo.jpg';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState("Home");
    const [showMenDropdown, setShowMenDropdown] = useState(false);
    const [showWomenDropdown, setShowWomenDropdown] = useState(false);
    const [showKidsDropdown, setShowKidsDropdown] = useState(false);

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
            { name: "T-Shirt", path: "/women/tee" },
            { name: "Sweater", path: "/women/sweater" },
            { name: "Woven", path: "/women/woven" },
            { name: "Denim Pant", path: "/women/denimpant" },
            { name: "Denim Jacket", path: "/women/denimjacket" },
            { name: "Lingerie", path: "/women/lingerie" }
        ],
        kids: [
            { name: "T-Shirt", path: "/kids/tee" },
            { name: "Sweater", path: "/kids/sweater" },
            { name: "Woven", path: "/kids/woven" },
            { name: "Denim Pant", path: "/kids/denimpant" },
            { name: "Denim Jacket", path: "/kids/denimjacket" }
        ]
    };

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img
                    src={logo}
                    alt=""
                    style={{
                        height: '50px',
                        width: 'auto'
                    }}
                />
                <p>
                    {'Everlane'.split('').map((letter, index) => (
                        <span
                            key={index}
                            style={{
                                color: index % 2 === 0 ? '#333' : '#3a7bd5'
                            }}
                        >
                            {letter}
                        </span>
                    ))}
                </p>
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
                        {menu === "Home" && <hr className="nav-hr" />}
                    </NavLink>
                </li>


                <li
                    className="nav-item dropdown"
                    onMouseEnter={() => setShowMenDropdown(true)}
                    onMouseLeave={() => setShowMenDropdown(false)}
                >
                    <div className="nav-link" style={{ cursor: 'default' }}>
                        Men
                        {menu === "Men" && <hr className="nav-hr" />}
                    </div>
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

                {/* Women's Dropdown */}
                <li
                    className="nav-item dropdown"
                    onMouseEnter={() => setShowWomenDropdown(true)}
                    onMouseLeave={() => setShowWomenDropdown(false)}
                >
    <span
        className={`nav-link ${menu === "Women" ? 'active' : ''}`}
        style={{
            textDecoration: 'none',
            cursor: 'default',
            display: 'inline-block'
        }}
    >
        Women
        {menu === "Women" && <hr className="nav-hr" />}
    </span>
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

                {/* Kids' Dropdown */}
                <li
                    className="nav-item dropdown"
                    onMouseEnter={() => setShowKidsDropdown(true)}
                    onMouseLeave={() => setShowKidsDropdown(false)}
                >
    <span
        className={`nav-link ${menu === "Kids" ? 'active' : ''}`}
        style={{
            textDecoration: 'none',
            cursor: 'default',
            display: 'inline-block'
        }}
    >
        Kids
        {menu === "Kids" && <hr className="nav-hr" />}
    </span>
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
                        to="/about"
                        className={({ isActive }) => {
                            if (isActive) setMenu("abouts");
                            return `nav-link ${isActive ? 'active' : ''}`;
                        }}
                        style={{ textDecoration: 'none' }}
                    >
                        About Us
                        {menu === "abouts" && <hr className="nav-hr" />}
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
                        {menu === "contacts" && <hr className="nav-hr" />}
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
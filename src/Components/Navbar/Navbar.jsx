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
            { name: "Dresses", path: "/women/dresses" },
            { name: "Tops", path: "/women/tops" },
            { name: "Bottoms", path: "/women/bottoms" },
            { name: "Shoes", path: "/women/shoes" },
            { name: "Accessories", path: "/women/accessories" },
            { name: "Sale", path: "/women/sale" }
        ],
        kids: [
            { name: "Boys", path: "/kids/boys" },
            { name: "Girls", path: "/kids/girls" },
            { name: "Baby", path: "/kids/baby" },
            { name: "Shoes", path: "/kids/shoes" },
            { name: "Sale", path: "/kids/sale" }
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

                {/* Men's Dropdown */}
                <li
                    className="nav-item dropdown"
                    onMouseEnter={() => setShowMenDropdown(true)}
                    onMouseLeave={() => setShowMenDropdown(false)}
                >
                    <NavLink
                        to="/men"
                        className={({ isActive }) => {
                            if (isActive) setMenu("Men");
                            return `nav-link ${isActive ? 'active' : ''}`;
                        }}
                        style={{ textDecoration: 'none' }}
                    >
                        Men
                        {menu === "Men" && <hr className="nav-hr" />}
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

                {/* Women's Dropdown */}
                <li
                    className="nav-item dropdown"
                    onMouseEnter={() => setShowWomenDropdown(true)}
                    onMouseLeave={() => setShowWomenDropdown(false)}
                >
                    <NavLink
                        to="/women"
                        className={({ isActive }) => {
                            if (isActive) setMenu("Women");
                            return `nav-link ${isActive ? 'active' : ''}`;
                        }}
                        style={{ textDecoration: 'none' }}
                    >
                        Women
                        {menu === "Women" && <hr className="nav-hr" />}
                    </NavLink>
                    {showWomenDropdown && (
                        <div className="dropdown-menu">
                            {categories.women.map((category) => (
                                <NavLink
                                    key={`women-${category.name}`}
                                    to={category.path}
                                    className="dropdown-item"
                                    onClick={() => setShowWomenDropdown(false)}
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
                    <NavLink
                        to="/kids"
                        className={({ isActive }) => {
                            if (isActive) setMenu("Kids");
                            return `nav-link ${isActive ? 'active' : ''}`;
                        }}
                        style={{ textDecoration: 'none' }}
                    >
                        Kids
                        {menu === "Kids" && <hr className="nav-hr" />}
                    </NavLink>
                    {showKidsDropdown && (
                        <div className="dropdown-menu">
                            {categories.kids.map((category) => (
                                <NavLink
                                    key={`kids-${category.name}`}
                                    to={category.path}
                                    className="dropdown-item"
                                    onClick={() => setShowKidsDropdown(false)}
                                >
                                    {category.name}
                                </NavLink>
                            ))}
                        </div>
                    )}
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
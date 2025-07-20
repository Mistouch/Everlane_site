import React, { useState } from "react";
import './Navbar.css';
import logo from '../Assets/logoo.jpg';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState("Home");

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img
                    src={logo}
                    alt=""
                    style={{
                        height: '50px', // Increased from 40px to match text
                        width: 'auto'
                    }}
                />
                <p>
                    {'Everlane'.split('').map((letter, index) => (
                        <span
                            key={index}
                            style={{
                                color: index % 2 === 0 ? '#333' : '#3a7bd5' // Optional alternating colors
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

                <li className="nav-item">
                    <NavLink
                        to="/products"
                        className={({ isActive }) => {
                            if (isActive) setMenu("products");
                            return `nav-link ${isActive ? 'active' : ''}`;
                        }}
                        style={{ textDecoration: 'none' }}
                    >
                        Our Products
                        {menu === "products" && <hr className="nav-hr" />}
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
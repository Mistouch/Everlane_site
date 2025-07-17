import React, {useState} from "react";
import './Navbar.css'
import logo from '../Assets/logoo.jpg'
import {Link} from "react-router-dom";


const Navbar = () => {

  const [menu,setMenu] = useState("Home")
    return (

        <div className ='navbar'>
          <div className= 'nav-logo'>
              <img src={logo} alt =""/>
              <p>Everlane</p>
          </div>
            <ul className = 'nav-menu'>
                <li onClick={()=>{setMenu("Home")}}><Link style={{textDecoration: 'none'}} to='/'>Home </Link> {menu==="Home"?<hr/> :<></>}</li>
                <li onClick={()=>{setMenu("abouts")}}><Link style={{textDecoration: 'none'}} to='/about-us'>About Us </Link>{menu==="abouts"?<hr/> :<></>}</li>
                <li onClick={()=>{setMenu("products")}}><Link style={{textDecoration: 'none'}} to='/products' >Our Products</Link>{menu==="products"?<hr/> :<></>}</li>
                <li onClick={()=>{setMenu("contacts")}}><Link style={{textDecoration: 'none'}} to='contact' >Contact Us</Link>{menu==="contacts"?<hr/> :<></>}</li>
            </ul>
        </div>
    )
}
export default Navbar
import react from 'react'
import './Product.css'
import { Link, Outlet } from "react-router-dom";

const Product = () => {
    return(
        <div>
            <h1>choose a product category</h1>
            <ul>
                <li><Link to="Shirt">Shirts</Link></li>
                <li><Link to="Pants">Pant</Link></li>
                <li><Link to="Bra">Bra</Link></li>
                <li><Link to="Panties">Panties</Link></li>
            </ul>
            <hr/>
            <Outlet/>
        </div>
    )
}

export default Product
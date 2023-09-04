import React from 'react';
import { Link } from 'react-router-dom';
import {MdShoppingCart} from 'react-icons/md';
import "./navbar.css"
export const Navbar = () => {
    return (
    <div className="navbar">
    <div className="links">
        <Link to="/">Shop</Link>
        <Link to='/contact'>Contact</Link>
        <Link to="/cart">
            <MdShoppingCart size={32} color='black'/>
        </Link>
    </div>
    </div>
    );
};
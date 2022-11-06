import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';
const Header = () => {
    return (
        <div className='header'>
            <div className='header-container'>
                <div className='left'>
                    <img src={logo} alt="" />
                </div>
                <div className='right'>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/shop'>Shop</Link></li>
                        <li><Link to='/order'>Order</Link></li>
                        <li><Link to='/orderreview'>Order Review</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/signup'>Signup</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
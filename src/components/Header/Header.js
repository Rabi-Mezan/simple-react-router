import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <NavLink className='link' to='/home'>Home</NavLink>
            <NavLink className='link' to='/friends'>Frineds</NavLink>
            <NavLink className='link' to='/about'>About</NavLink>

        </div>
    );
};

export default Header;
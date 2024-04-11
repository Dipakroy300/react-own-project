import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav>
           <button className='btn'><ActiveLink to={'/'}>Home</ActiveLink></button>
           <button className='btn'><ActiveLink to={'/about'}>About</ActiveLink></button>
           <button className='btn'> <ActiveLink to={'/friends'}>Friends</ActiveLink></button>
           <button className='btn'><ActiveLink to={'/contact'}>Contact</ActiveLink></button>
           <button className='btn'>  <ActiveLink to={'/details'}>Details</ActiveLink></button>
           <button className='btn'> <ActiveLink to={'/posts'}>Posts</ActiveLink> </button>
        
           
        </nav>
    );
};

export default Header;
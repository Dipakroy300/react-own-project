import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.css'
const Header = () => {
    return (
        <nav>
           <button className='btn'> <Link to={'/'}>Home</Link></button>
           <button className='btn'><Link to={'/about'}>About</Link></button>
           <button className='btn'> <Link to={'/friends'}>Friends</Link></button>
           <button className='btn'><Link to={'/contact'}>Contact</Link></button>
           <button className='btn'>  <Link to={'/details'}>Details</Link></button>
           <button className='btn'> <Link to={'/posts'}>Posts</Link> </button>
          
           
        </nav>
    );
};

export default Header;
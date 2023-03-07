import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='flex items-center justify-around bg-neutral-100 drop-shadow-lg p-5'>
            <h1 className='text-4xl font-semibold text-amber-400'>Quiz Practice</h1>
            <div className='text-sky-400 font-semibold'>
            <Link to='/'>Home</Link>
            <Link className='ml-4' to='/topic'>Topic</Link>
            <Link className='ml-4' to='/blog'>Blog</Link>
            <Link className='ml-4' to="/about">About</Link>
            </div>
        </nav>
    );
};

export default Navbar;
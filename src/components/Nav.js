import React from 'react';
import '../styles/Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='nav'>
      <h1 className='nav__header'>A+ Films</h1>
      <div className='nav__buttons-box'>
        <Link to='/'>
          <button className='nav__home-button'>Home</button>
        </Link>
        <Link to='/user/login'>
          <button className='nav__login-button'>Login</button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;

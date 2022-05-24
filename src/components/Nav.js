import React from 'react';
import '../styles/Nav.css';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  return (
    <nav className='nav'>
      <h1 className='nav__header'>A+ Films</h1>
      {props.user ? 
        <div className='nav__welcome-msg-box'>
          <h2 className='nav__welcome-msg'>Welcome, {`${props.user.username[0].toUpperCase() + props.user.username.slice(1, props.user.username.length)}`}</h2>
        </div> : ''}
      <div className='nav__buttons-box'>
        <Link to='/'>
          <button className='nav__home-button'>Home</button>
        </Link>
        <Link to='/user/login'>
           {!props.user && <button className='nav__login-button'>Login</button>}
        </Link>
           {props.user && <button className='nav__login-button' onClick={() => props.handleLogout()}>Logout</button>}
      </div>
    </nav>
  );
};

export default Nav;

import React from 'react';

const Nav = () => {
  return (
    <nav className='nav'>
      <h1 className='nav__header'>A+ Films</h1>
      <div className='nav__buttons-box'>
        <button className='nav__home-button'>Home</button>
        <button className='nav__login-button'>Login</button>
      </div>
    </nav>
  );
};

export default Nav;

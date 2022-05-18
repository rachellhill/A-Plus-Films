import React from 'react';
import dino from '../images/dino-dinosaur.png';
import { Link } from 'react-router-dom';
import '../styles/Error.css'

const Error = () => {
  return (
      <div className='error'>
        <h1>Error loading - please try again!</h1>
        <img src={dino}/>
        <Link to='/'>
          <button className='nav__home-button'>Try Again</button>
        </Link>
      </div>
  )
}

export default Error;

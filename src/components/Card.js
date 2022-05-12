import React from 'react';
import '../styles/Card.css';

const Card = (props) => {
  console.log(props);
  return (
    <img className='card__poster' src={props.img} />
  )
};

export default Card;

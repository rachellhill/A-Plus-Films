import React from 'react';
import Card from './Card';
import '../styles/Movies.css';

const Movies = ({ movies }) => {

  return movies.map(movie => {
    return (
      <Card
        img={movie.poster_path}
      />
    )
  })
};

export default Movies;

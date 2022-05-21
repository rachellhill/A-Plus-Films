import React from 'react';
import Card from './Card';
import '../styles/Movies.css';

const Movies = ({ movies, user, handleWatchMovie }) => {

  return movies.map(movie => {
    return (
      <Card
        key={movie.id}
        id={movie.id}
        img={movie.poster_path}
        title={movie.title}
        year={movie.release_date}
        rating={movie.average_rating}
        user={user}
        handleWatchMovie={handleWatchMovie}
      />
    )
  })
};

export default Movies;

import React, { Component } from 'react';
import movieData from '../mockData';
import Nav from './Nav';
import Movies from './Movies';
import Movie from './Movie';
import '../styles/App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: movieData.movies,
      showMovie: false
    }
  }

  handleMovieClick = (id) => {
    let foundMovie = movieData.movies.find(movie => movie.id === id)
    this.setState({
      showMovie: true,
      selectedMovie: foundMovie
    })
  }

  render = () => {
    return (
      <div>
        <Nav />
        {this.state.showMovie ? <Movie selectedMovie={this.state.selectedMovie}/> : 
          <div className='movies-container'>
            <Movies movies={this.state.movies} handleMovieClick={this.handleMovieClick}/>
          </div>
        }
      </div>
    )
  }
}

export default App;

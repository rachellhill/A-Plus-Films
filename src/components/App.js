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
    console.log(id)
    this.setState({
      showMovie: true,
      allMovies: movieData,
      selectedMovie: id
    })
  }

  render = () => {
    return (
      <div>
        <Nav />
        {this.state.showMovie ? <Movie movies={movieData}/> : 
          <div className='movies-container'>
            <Movies movies={this.state.movies} handleMovieClick={this.handleMovieClick}/>
          </div>
        }
      </div>
    )
  }
}

export default App;

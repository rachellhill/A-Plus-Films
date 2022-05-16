import React, { Component } from 'react';
import Nav from './Nav';
import Movies from './Movies';
import Movie from './Movie';
import '../styles/App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      showMovie: false
    }
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .then(data => this.setState({ movies: data.movies }));
  }

  handleMovieClick = (id) => {
    let foundMovie = this.state.movies.find(movie => movie.id === id)
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

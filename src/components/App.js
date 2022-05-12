import React, { Component } from 'react';
import movieData from '../mockData';
import Nav from './Nav';
import Movies from './Movies';
import '../styles/App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: movieData.movies
    }
  }

  render() {
    return (
      <div>
        <Nav />
        <div className='movies-container'>
          <Movies movies={this.state.movies}/>
        </div>
      </div>
    )
  }
}

export default App;

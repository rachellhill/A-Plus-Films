import React, { Component } from 'react';
import movieData from '../mockData';
import Nav from './Nav';
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
        <main></main>
      </div>
    )
  }
}

export default App;

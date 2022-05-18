import React, { Component } from 'react';
import Nav from './Nav';
import Movies from './Movies';
import Movie from './Movie';
import '../styles/App.css';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import Error from './Error';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      showMovie: false,
      error: false
    }
  }

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
    .then(data => this.setState({ movies: data.movies }))
    .catch(error => {
      this.setState({ error: true })
    })
  }

  render = () => {
    return (
      <div>
        {this.state.error ? <Error /> :
          <div>
            <Nav />
            <Route path='/:id' render={({match}) => <Movie id={match.params.id}/>}/>
            <Route exact path='/' render={() => {
              return (
                <div className='movies-container'>
                <Movies movies={this.state.movies}/>
              </div>
            )}}/>
          </div>
        }
      </div>
    )
  }
}

export default App;

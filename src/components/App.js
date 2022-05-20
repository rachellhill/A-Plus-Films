import React, { Component } from 'react';
import Nav from './Nav';
import Movies from './Movies';
import Movie from './Movie';
import '../styles/App.css';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import Error from './Error';
import Login from './Login';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      showMovie: false,
      error: false,
      user: ''
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

  handleLogin = (user) => {
    this.setState({...this.state, user: user})
  }

  render = () => {
    return (
      <div>
        {this.state.error ? <Error /> :
          <div>
            <Nav user={this.state.user}/>
            <Route exact path='/user/login' render={() => <Login handleLogin={this.handleLogin}/>}/>
            <Route exact path='/:id' render={({match}) => <Movie id={match.params.id}/>}/>
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

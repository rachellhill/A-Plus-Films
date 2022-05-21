import React, { Component } from 'react';
import { fetchUser } from '../apiCalls'
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
      user: '',
      modal: false
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

  handleWatchMovie = (id, rating, user) => {
    fetch(`http://localhost:3001/api/v1/users/${user.username}`, {
      method: 'POST',
      body: JSON.stringify({
        "id": id,
        "userRating" : rating
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then(response => {
        console.log(response);
        console.log(this.state.user)
        this.state.user.watchedMovies.push(response.post)
        this.setState({...this.state})
      })
  }

  handleLogin = (user) => {
    this.setState({...this.state, user: user})
  }
  
  handleLogout = () => {
    this.setState({...this.state, user: ''})
  }

  openRatingModal = () => {
    this.setState({modal: true})
  }
  ///////////////stopped here to continue

  render = () => {
    return (
      <div>
        {this.state.error ? <Error /> :
          <div>
            <Nav user={this.state.user} handleLogout={this.handleLogout}/>
            <Route exact path='/user/login' render={() => <Login handleLogin={this.handleLogin}/>}/>
            <Route exact path='/:id' render={({match}) => <Movie id={match.params.id}/>}/>
            <Route exact path='/' render={() => {
              return (
                <div className='movies-container'>
                <Movies movies={this.state.movies} user={this.state.user} handleWatchMovie={this.handleWatchMovie}/>
              </div>
            )}}/>
          </div>
        }
      </div>
    )
  }
}

export default App;

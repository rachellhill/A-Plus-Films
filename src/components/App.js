import React, { Component } from 'react';
import { fetchMovies, postUserRating } from '../apiCalls'
import Nav from './Nav';
import Movies from './Movies';
import Movie from './Movie';
import '../styles/App.css';
import { Route } from 'react-router-dom';
import Error from './Error';
import Login from './Login';
import RatingModal from './RatingModal';

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
    fetchMovies().then(data => this.setState({ movies: data.movies }))
    .catch(error => {
      this.setState({ error: true })
    })
  }

  handleWatchMovie = (id, rating, user) => {
    postUserRating(id, rating, user)
      .then(response => {
        console.log(response);
        this.state.user.watchedMovies.push(response.post)
        this.setState({...this.state, modal: false})
      })
  }

  handleLogin = (user) => {
    this.setState({...this.state, user: user})
  }

  handleLogout = () => {
    this.setState({...this.state, user: ''})
  }

  openRatingModal = (id) => {
    this.setState({...this.state, modal: true, selectedMovieId: id })
  }

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
                <Movies movies={this.state.movies} user={this.state.user}
                openRatingModal={this.openRatingModal}/>
              </div>
            )}}/>
          </div>
        }
        {this.state.modal && <RatingModal
          id={this.state.selectedMovieId}
          user={this.state.user}
          handleWatchMovie={this.handleWatchMovie}/>}
      </div>
    )
  }
}

export default App;

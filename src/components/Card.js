import React, {Component} from 'react';
import RatingModal from './RatingModal';
import '../styles/Card.css';
import { Link } from 'react-router-dom';

class Card extends Component {
  constructor(){
    super();
    this.state = {
      show: false,
      watched: 'white',
      userRating: 0
    }
  }


  handleHover = () => {
    this.setState({
      show: !this.state.show
    })
  }

  renderUserMovies = () => {
    this.props.user.watchedMovies.forEach(movie => {
      if (movie.id === this.props.id){
        this.state.watched = '#6D47F2'
      }
    })
    return this.state.watched
  }

  renderUserRating = () => {
    if (!this.props.user) {
      return 'none'
    }
    this.props.user.watchedMovies.forEach(movie => {
      if (movie.id === this.props.id) {
        this.state.userRating = movie.userRating
      }
    })
  }

  render = () => {
    this.renderUserRating()
    let border;
    this.props.user ?  border = this.renderUserMovies() : border = 'white'
    let hoverClass;
    this.state.show ? hoverClass = 'card__hover-info' : hoverClass = 'hidden'
    return (
      <div className='card__box'>
        <Link to={`/${this.props.id}`}>
          <div className='card__poster'
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleHover}
          src={this.props.img}
          style={{backgroundImage: `url(${this.props.img})`,
                  border: `5px solid ${border}`}}>
            <div className={this.state.show ? 'mask' : 'hidden'}>
              <h2 className={hoverClass}>{this.props.title}</h2>
              <h2 className={hoverClass}>Release Date: {this.props.year}</h2>
              <h2 className={hoverClass}>Rating: {this.props.rating.toFixed(1)}</h2>
            </div>
            <p className={this.state.watched === '#6D47F2' && this.props.user ? 'card__watched' : 'hidden'}>watched</p>
          </div>
        </Link>
        <p className={this.state.watched === '#6D47F2' && this.props.user ? 'card__watched-rating' : 'hidden'}>My rating: {this.state.userRating}</p>
        {this.props.user && this.state.watched === 'white' ? <button onClick={() => this.props.openRatingModal(this.props.id)} className='card__watched-button'>Mark as Watched</button> : ''}
      </div>
      )
    }

};

export default Card;

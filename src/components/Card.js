import React, {Component} from 'react';
import '../styles/Card.css';
import { Link } from 'react-router-dom';

class Card extends Component {
  constructor(){
    super();
    this.state={
      show: false,
      watched: 'white',
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
        this.state.watched = 'green '
      }
    })
    return this.state.watched
  }


  render = () => {
    let border;
    this.props.user ?  border = this.renderUserMovies(): border = 'white'
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
          </div>
        </Link>
        {this.props.user && this.state.watched === 'white' ? <button onClick={() => this.props.handleWatchMovie()} className='card__watched-button'>Mark as Watched</button> : ''}
      </div>
      )
    }

};

export default Card;

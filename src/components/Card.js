import React, {Component} from 'react';
import '../styles/Card.css';

class Card extends Component {
  constructor(){
    super();
    this.state={
      show: false
    }
  }

  handleHover = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render = () => {
    return (
        <div className='card__poster' 
        onMouseEnter={this.handleHover} 
        onMouseLeave={this.handleHover} 
        src={this.props.img} 
        style={{backgroundImage: `url(${this.props.img})`}}>
          <h2 className={this.state.show ? 'card__hover-info' : 'hidden'}>{this.props.title}</h2>
          <h2 className={this.state.show ? 'card__hover-info' : 'hidden'}>{this.props.year}</h2>
          <h2 className={this.state.show ? 'card__hover-info' : 'hidden'}>{this.props.rating}</h2>
        </div>
      )
    }
  
};

export default Card;

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
    let hoverClass;
    this.state.show ? hoverClass = 'card__hover-info' : hoverClass = 'hidden'
    return (
        <div className='card__poster' 
        onMouseEnter={this.handleHover} 
        onMouseLeave={this.handleHover} 
        src={this.props.img} 
        style={{backgroundImage: `url(${this.props.img})`}}>
          <div className={this.state.show ? 'mask' : 'hidden'}>
            <h2 className={hoverClass}>{this.props.title}</h2>
            <h2 className={hoverClass}>{this.props.year}</h2>
            <h2 className={hoverClass}>{this.props.rating.toFixed(1)}</h2>
          </div>
        </div>
      )
    }
  
};

export default Card;

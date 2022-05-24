import React, { Component } from "react";
import '../styles/RatingModal.css'


class RatingModal extends Component {
  constructor() {
    super()
    this.state = {
      userRating: 0,
      error: false
    }
  }

  onChange(event) {
    if (event.target.value > 10) {
      this.setState({ error: true })
    } else {
      this.setState({ userRating: event.target.value, error: false })
    }
  }

  render() {
    return (
        <div className="modal__box">
          <div className='modal__content'>
            <p className='modal__info'>What would you rate this movie? (Out of 10 stars)</p>
            <input
              className='modal__rating-input'
              type='number'
              placeholder='Enter rating'
              max = '10'
              onChange={(event) => this.onChange(event)}
            />
            {this.state.error && <p>Please enter a number between 1 and 10</p>}
            <button
              className='nav__login-button'
              onClick={() => {
                if (!this.state.error) {
                  this.props.handleWatchMovie(this.props.id, this.state.userRating, this.props.user.username)
                }
                return
            }}>SUBMIT</button>
          </div>
        </div>
    )
  }
}


export default RatingModal

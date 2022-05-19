import React, { Component } from 'react'
import Backdrop from './Backdrop'
import DetailedInfo from './DetailedInfo'
import Error from './Error'
import '../styles/Movie.css'

class Movie extends Component {
    constructor() {
        super()
        this.state = {
          movie: {},
          trailers: [],
          error: false
        }
    }

    componentDidMount = () => {
      fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}`)
        .then(response => response.json())
        .then(data => this.setState({ movie: data.movie }))
        .catch(error => {
          this.setState({ error: true })
        })

      fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}/videos`)
        .then(response => response.json())
        .then(data => this.setState({ ...this.state, trailers: data.videos }))
        .catch(error => {
          this.setState({ error: true })
        })
    }

    render = () => {
        return (
          <div className='movie'>
            {this.state.error ? <Error /> :
              <div>
                  <Backdrop movie={this.state.movie} />
                  <DetailedInfo movie={this.state.movie} trailers={this.state.trailers}/>
              </div>
            }
          </div>
        )
    }
}


export default Movie

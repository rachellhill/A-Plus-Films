import React, { Component } from 'react'
import Backdrop from './Backdrop'
import DetailedInfo from './DetailedInfo'
import Error from './Error'
import { fetchMovie, fetchMovieTrailers } from '../apiCalls'
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
        fetchMovie(this.props.id)
        .then(data => this.setState({ movie: data.movie }))
        .catch(error => {
          this.setState({ error: true })
        })

        fetchMovieTrailers(this.props.id)
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

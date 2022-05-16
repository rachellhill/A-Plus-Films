import React, { Component } from 'react'
import Backdrop from './Backdrop'
import DetailedInfo from './DetailedInfo'

class Movie extends Component {
    constructor() {
        super()
        this.state = {
          movie: {},
          trailers: []
        }
    }

    componentDidMount() {
      fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.selectedMovie.id}`)
        .then(response => response.json())
        .then(data => this.setState({ movie: data.movie }))

      fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.selectedMovie.id}/videos`)
        .then(response => response.json())
        .then(data => this.setState({ ...this.state, trailers: data.videos }))
    }

    render = () => {
        return (
            <div>
                <Backdrop movie={this.state.movie} />
                <DetailedInfo movie={this.state.movie} trailers={this.state.trailers}/>
            </div>
        )
    }
}


export default Movie

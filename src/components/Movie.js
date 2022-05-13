import React, { Component } from 'react'
import Backdrop from './Backdrop'

class Movie extends Component {
    constructor() {
        super()
    }

    render = () => {
        console.log(this.props.selectedMovie)
        return (
            <div>
                <Backdrop movie={this.props.selectedMovie} />
            </div>
        )
    }
}


export default Movie
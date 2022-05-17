import React from 'react'
import '../styles/DetailedInfo.css'
import Synopsis from './Synopsis'
import Trailers from './Trailers'
import Specs from './Specs'


const DetailedInfo = (props) => {
    return (
        <div className='movie__detailed-info'>
            <div className='movie__specs'>
              <Specs specs={props.movie}/>
            </div>
            <div className='movie__synopsis'>
              <div className="movie__synopsis-header">
                <h5>Synopsis:</h5>
              </div>
              {!props.movie.overview && <h6>No Synopsis Available</h6>}
              <Synopsis overview={props.movie.overview}/>
            </div>
            <div className="movie__trailers">
              {!props.trailers.length && <h6>No Trailers Available</h6>}
              <Trailers trailers={props.trailers} />
            </div>
        </div>
    )
}


export default DetailedInfo

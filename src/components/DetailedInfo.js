import React from 'react'
import '../styles/DetailedInfo.css'
import Synopsis from './Synopsis'
import Trailers from './Trailers'
import Specs from './Specs'


const DetailedInfo = (props) => {
    return (
        <div className='movie__detailed-info'>
            <Specs specs={props.movie}/>
            <Synopsis overview={props.movie.overview}/>
            <Trailers trailers={props.trailers} />
        </div>
    )
}


export default DetailedInfo

import React from 'react'
import '../styles/GeneralInfo.css'

const GeneralInfo = (props) => {
    return (
        <div className='generalInfo'>
            <h3 className='movie__info'>{props.title}</h3>
            {props.rating ? <h3 className='movie__info'>Rating: {props.rating.toFixed(1)}</h3> : <h3>No Ratings Listed</h3>}
            {props.genre ? <h3 className='movie__info'>{props.genres.join(", ")}</h3> : <h3>No Genres Listed</h3>}
        </div>
    )
}

export default GeneralInfo

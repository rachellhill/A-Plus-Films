import React from 'react'
import '../styles/Synopsis.css'


const Synopsis = (props) => {
    return (
        <div className='movie__detailed-info-synopsis'>
            <h5>Synopsis:</h5>
            <p>{props.overview}</p>
        </div>
    )
}

export default Synopsis
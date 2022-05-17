import React from 'react'
import '../styles/Synopsis.css'


const Synopsis = (props) => {
    return (
        <div className='movie__detailed-info-synopsis'>
            <p>{props.overview}</p>
        </div>
    )
}

export default Synopsis

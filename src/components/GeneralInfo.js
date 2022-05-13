import React from 'react'
import '../styles/GeneralInfo.css'

const GeneralInfo = (props) => {
    return (
        <div>
            <h3 className='movie__title'>{props.title}</h3>
            <h3 className='movie__title'>{props.rating}</h3>
            <h3 className='movie__title'>{props.genres}</h3>
        </div>
    )
}

export default GeneralInfo

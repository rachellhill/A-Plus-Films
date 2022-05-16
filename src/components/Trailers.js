import React from 'react'
import '../styles/Trailers.css'


const Trailers = ({ trailers }) => {


  return trailers.map((trailer, index) => {
    return (
        <div key={trailer.key}>
          <a href={`www.youtube.com/watch?v=${trailer.key}`}>Trailer {`${index + 1}`}</a>
        </div>
    )
  })
}

export default Trailers

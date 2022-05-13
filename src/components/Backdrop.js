import React from "react";
import GeneralInfo from "./GeneralInfo";
import '../styles/Backdrop.css'

const Backdrop = (props) => {
    return (
        <div className="movie__backdrop" style={{backgroundImage: `url(${props.movie.backdrop_path})`}}>
            <GeneralInfo title={props.movie.title} rating={props.movie.average_rating} genres={props.movie.genres}/>
        </div>
       
    )
}


export default Backdrop
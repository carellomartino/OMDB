import React from 'react'
import { Link } from 'react-router-dom';

export default function (props) {

    return (
        <div>
            <h1>SINGLE MOVIE</h1>
            {console.log("props y params en single movies", props.movie.peli)}
            <h1> {props.movie.peli.Title} </h1>
        {/* <img src ={}/> */}
        </div>
    )
}
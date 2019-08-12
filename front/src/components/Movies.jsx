import React from 'react';
import { Link } from 'react-router-dom';


export default (props) => (
  <div className='row' id="movies">
    {props.movies.pelis && props.movies.pelis.Search.map(movie => (
      <div key={movie.imdbID} className='col-xs-2'>
        <h1> {movie.Title}</h1>
        <div>
          <Link to={`/movies/${movie.imdbID}`} >

          <img src={movie.Poster}/>
          
          </Link>
          
          
        </div>
        
      </div>
    ))}
    

  </div>

)








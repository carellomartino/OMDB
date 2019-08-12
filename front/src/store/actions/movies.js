import axios from 'axios';
import { RECEIVE_MOVIES } from '../constants.js';

const setMovies = function (movie) {
  return {
    type: RECEIVE_MOVIES,
    movie: movie
  };
};

export const fetchMovies = function (input) {
  return function (dispatch, getState) {
    axios.get(`http://www.omdbapi.com/?apikey=20dac387&s=${input}`)
      .then(res => {
        // console.log("FETCHMOV")
        dispatch(setMovies(res.data)); //dispatch llama al reducer!!! tiene un action creator para el reducer (el de arriba)
      }); //esta funcion fue llamada por handlesubmit
  };
};



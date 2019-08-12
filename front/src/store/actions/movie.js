import axios from 'axios';
import { RECEIVE_SINGLE_MOVIE } from '../constants.js';

const setMovie = function (singleMovie) {
  return {
    type: RECEIVE_SINGLE_MOVIE,
    movie: singleMovie
  };
};

export const fetchMovie = function (input) {
  return function (dispatch, getState) {
    console.log("REQ.PARAMS.ID", input)
    axios.get(`http://www.omdbapi.com/?apikey=20dac387&i=${input}`)
      .then(res => {
        // console.log("FETCHMOV")
        dispatch(setMovie(res.data)); //dispatch llama al reducer!!! tiene un action creator para el reducer (el de arriba)
      }); //esta funcion fue llamada por handlesubmit
  };
};



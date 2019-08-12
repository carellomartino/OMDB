import { RECEIVE_MOVIES } from '../constants';
import { RECEIVE_SINGLE_MOVIE } from '../constants';

const initialState = { content: [] };

export default function movieReducer (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_MOVIES:
       return Object.assign({}, state, { movie: action.movie });
    case RECEIVE_SINGLE_MOVIE:
        return Object.assign({}, state, { movie: action.movie });
    default: 
       return state;
  }
}
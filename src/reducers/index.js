import {combineReducers} from 'redux';
import movies from './movie-reducer'; // using alias

const rootReducer = combineReducers({
  movies
});

export default rootReducer;

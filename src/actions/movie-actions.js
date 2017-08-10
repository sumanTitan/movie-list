import { searchByName } from '../api_calls/IMDB';
// export function searchMovie(movie) {
//   return {
//     type: 'SEARCH_MOVIE',
//     movie
//   };
// }

export function loadMoviesSuccess(movie) {
  return {
    type: 'LOAD_MOVIES_SUCCESS',
    movie
  };
}

export function searchMovie(movie) {
  return function (dispatch) {
    return searchByName(movie.searchText).then(movies => {
      dispatch(loadMoviesSuccess(movies));
    }).catch(err => {
      throw(err);
    });
  };
}

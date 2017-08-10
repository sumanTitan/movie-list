export default function movieReducer(state = [], action) {
  switch(action.type) {
      case 'SEARCH_MOVIE':
        return [
          Object.assign({}, action.movie)
        ];
      case 'LOAD_MOVIES_SUCCESS':
        return [
          ...Object.assign([] , action.movie.results)
        ];
      default:
        return state;
  }
}

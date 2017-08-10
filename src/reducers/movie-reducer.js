export default function movieReducer(state = [], action) {
  switch(action.type) {
      case 'SEARCH_MOVIE':
        return [...state,
          Object.assign({}, action.movie)
        ];
      case 'LOAD_MOVIES_SUCCESS':
        return [...state,
          ...Object.assign([] , action.movie.results)
        ];
      default:
        return state;
  }
}

import React, {PropTypes} from 'react';
import MovieCard from './movie-card';

const MovieCardList = (props) => {
  return (
    <div className="movie-list">
      {props.movies.map(MovieCard)}
    </div>
  );
};

MovieCardList.propTypes = {
  movies: PropTypes.array.isRequired,
  'movies.map': PropTypes.func.isRequired
};

export default MovieCardList;

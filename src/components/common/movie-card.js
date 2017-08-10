import React from 'react';
import ToolTip from './tooltip';

const MovieCard = (movie, index) => {
  console.log(movie);
  if(movie.poster_path) {
    return (
      <div className="movie-card" key={index}>
        <img src={`http://image.tmdb.org/t/p/w185//${movie.poster_path}`} alt={movie.title + ' image'} />
        <p>{props.title}</p>
      </div>
    );
  } else {
    return (
      <div className="movie-card" key={index}>
        <img src='http://placehold.it/150/92c952' alt={movie.title + ' image'} />
        <p>{props.title}</p>
      </div>
    );
  }
  // return <movieCard movie={movie} index={index}></movieCard>
};

export default MovieCard;

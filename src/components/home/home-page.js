import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import * as movieAction from '../../actions/movie-actions';
import MovieCardList from '../common/movie-card-list';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      movie: {
        searchText: ""
      }
    };

    this.searchMovie = this.searchMovie.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  searchMovie() {
    // alert(this.state.movie.searchText);
    this.props.searchMovie(this.state.movie);
  }

  onSearchChange(event) {
    const movie = this.state.movie;
    movie.searchText = event.target.value;
    this.setState({ movie: movie });
  }

  movieRow(movie, index) {
    return <div key={index}>{movie.title}</div>;
  }
  render() {
    return (
      <div className="jumbotron">
        <h1>IMDB</h1>
        <p> Get your movies </p>
        <input type="search" onChange={this.onSearchChange} value={this.state.movie.searchText} />
        <input type="submit" value="Search" onClick={this.searchMovie} />
        <p> &nbsp; </p>
        <MovieCardList movies={this.props.movies} />
      </div>
    );
  }
}

HomePage.propTypes = {
  movies: PropTypes.array.isRequired,
  searchMovie: PropTypes.func.isRequired
};
function mapStateToProps(state, ownProps) {
  return {
    movies: state.movies
  };
}


function mapDispatchToProps(dispatch) {
  return {
    searchMovie: (movie) => {
      dispatch(movieAction.searchMovie(movie));
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

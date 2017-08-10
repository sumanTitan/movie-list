import React from 'react';
import { connect } from 'react-redux';
import * as movieAction from '../../actions/movie-actions';
import MovieCardList from '../common/movie-card-list';

class TopMovies extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  
  render() {
    return (
      <div className="jumbotron">
        <MovieCardList movies={this.props.movies} />
      </div>
    );
  }

  componentWillMount() {
    this.props.topMovies();
  }
}


function mapStateToProps(state, ownProps) {
  return {
    movies: state.movies
  };
}


function mapDispatchToProps(dispatch) {
  return {
    topMovies: () => {
      dispatch(movieAction.topMovies());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopMovies);

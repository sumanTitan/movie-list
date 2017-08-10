import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/layout';
import HomePage from './components/home/home-page';
import AboutPage from './components/about/About-page';
import TopMovies from './components/movies/top-movies';
export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="top-movies" component={TopMovies} />
  </Route>
);

import React from 'react';
import MovieHead from '../movies/moviehead';
import MoviesBody from '../movies/moviesbody';
import Search from './search';
import Footer from './footer';
import './moviepage.css';

class MoviePage extends React.Component{
  render(){
    return(
      <div className="movies">
      <MovieHead />
      <Search />
      <MoviesBody />
      <Footer />
      </div>
    );
  }
}

export default MoviePage;

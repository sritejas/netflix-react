import React from 'react';
import logo from '../../assets/images/Netflix-logo.png';
import './movie_detail.css';
import MovieDetailBody from './movie_detail_body';
import MovieHead from '../movies/moviehead';
import { Link } from 'react-router-dom';

class MovieDetail extends React.Component{
  render(){
    return(
      <div className="moviedetaild">
        <MovieHead />
        <MovieDetailBody />
     </div>
    );
  }
}

export default MovieDetail;

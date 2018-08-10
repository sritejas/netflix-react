import React from 'react';
import './movie_detail_body.css';
import {connect} from 'react-redux';
import { fetchMovieDetail } from '../../actions/index';
import MovieHead from '../movies/moviehead';
import Footer from '../movies/footer';

class MovieDetailBody extends React.Component{
  componentWillMount(){
    this.props.fetchMovieDetail(this.props.match.params.id).catch(error => {console.log('Error: '+ error)});
  }
  render(){
    if(!this.props.moviedetail){
      return <div>Loading...</div>
    }
    return(
      <div className="moviedetbody"
       style = {{backgroundImage : 'black;'}}>
      <MovieHead />

      <div class="ui three column very relaxed grid">
  <div class="column">

<div class="movie-card">
 <div class="ui card">
  <div class="image">
    <img src={ (this.props.moviedetail.poster_path !==null) ? `http://image.tmdb.org/t/p/w500//${this.props.moviedetail.poster_path}` : `https://wallpapershome.com/images/pages/pic_v/18271.jpg`} alt=""/>

  </div>
  <div class="content">
    <a class="header">{this.props.moviedetail.original_name}</a>

  </div>
  </div>
 </div>

  </div>
  <div class="ui vertical divider">
    and
  </div>
  <div id="col2" class="column">
      <h2>{this.props.moviedetail.original_name}</h2>
    <p>{this.props.moviedetail.overview}</p>
    <p>First air date: {this.props.moviedetail.first_air_date}</p>
    <p>Rating: {this.props.moviedetail.vote_average}</p>
    <p>Country: {this.props.moviedetail.origin_country[0]}</p>
  </div>
 </div>

       <Footer />
      </div>
    );
  }
}
function mapStateToProps(state){
  return { moviedetail:state.movies.detail};
}
// here {fetchMovieDetail} equal to bindActionCreators-mapDispatchToProps
export default connect(mapStateToProps,{fetchMovieDetail})(MovieDetailBody);

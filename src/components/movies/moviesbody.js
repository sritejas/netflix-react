import React from 'react';
import { connect } from 'react-redux';
import './moviesbody.css';

class MoviesBody extends React.Component{

  render(){
    if (!this.props.title){
      return <div id="nullhandler" >
      <h4>Search a Movie title</h4>
       <div id='c1' class="ui card">
        <div class="image">
        <img src = "https://www.wallpapersin4k.org/wp-content/uploads/2017/04/Hunger-Games-Phone-Wallpaper.jpg" alt=""/>
        </div>
        </div>
      </div>
    }
    if(this.props.title.Response === "False"){
    return <div >
    {this.props.title.Error}. Try again
    <div id='c2' class="ui card">
     <div class="image">
     <img src = "https://www.wallpapersin4k.org/wp-content/uploads/2017/04/Hunger-Games-Phone-Wallpaper.jpg" alt=""/>
     </div>
     </div>
    </div>
    }
    return(
      <div className="moviesbody">
        <div class="ui three column very relaxed grid">
         <div class="column">
          <div class="movie-card">
           <div class="ui card">
            <div class="image">
              <img src={ (this.props.title.Poster !==null) ? `${this.props.title.Poster}` : "https://wallpapershome.com/images/pages/pic_v/18271.jpg"} alt="" />
            </div>
           <div class="content">
            <a class="header">{this.props.title.Title}</a>
          </div>
          </div>
       </div>
      </div>
      <div class="ui vertical divider">
                   and
      </div>
      <div id="col2" class="column">
        <h2>{this.props.title.Title}</h2>
        <p>{this.props.title.Plot}</p>
        <p>Actors:{this.props.title.Actors}</p>
        <p>Production: {this.props.title.Production}</p>
        <p>Release Date: {this.props.title.Released}</p>
        <p>IMDB Rating: {this.props.title.imdbrating}</p>
        <p>Country: {this.props.title.Country}</p>
        <p>Website: {this.props.title.Website}</p>

      </div>
   </div>

  </div>
    );
  }
}

function mapStateToProps(state){
  return {
    title:state.movies.search
  };
}

export default connect(mapStateToProps)(MoviesBody);

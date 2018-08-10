import React from 'react';
import './firstrow.css';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectMovie} from '../../actions/index';
import { Link } from 'react-router-dom';

// FirstRow is the class that renders the data in the home page in grid of movie posters
class FirstRow extends React.Component{
  componentWillMount(){
    this.props.aSelectMovie().catch(error => {console.log('Error Occured :'+ error)});


  }
  renderRow(){
    if(!this.props.firstrowlist.length){
      return(
      <div>Loading</div>
    );
    }
    return this.props.firstrowlist.map((movie) => {
      return (
        <div className = "column" key={movie.id}>
         <Link to={"movie/" + movie.id}>
        <img id="image-list" src= { (movie.poster_path !==null) ? `http://image.tmdb.org/t/p/w500//${movie.poster_path}` : `https://cdn.shopify.com/s/files/1/1452/9270/t/2/assets/no-image.svg?5828501029247220861`} alt="" />
        </Link>
        </div>
      );
    });
  }
  render(){
    return(
      <div id="list" className="ui five column grid" >
        {this.renderRow()}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    firstrowlist:state.movies.pResults
  };
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({aSelectMovie:selectMovie},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(FirstRow);

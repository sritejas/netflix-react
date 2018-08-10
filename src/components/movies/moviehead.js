import React from 'react';
import logo from '../../assets/images/Netflix-logo.png';
import { Link } from 'react-router-dom';

import './moviehead.css';

class MovieHead extends React.Component{
  render(){
    return(
      <div className="ui inverted segment">
      <div className="logo"><img src={logo} alt="Netflix-React" /></div>

        <div className="ui inverted secondary menu">
        <Link to='/'>
          <a className=" item">
            Home
          </a>
        </Link>
          <a className="active red item">
            Movies
          </a>

        </div>
      </div>
    );
  }
}

export default MovieHead;

import React from 'react';
import logo from '../../assets/images/Netflix-logo.png';
import { Link } from 'react-router-dom';
import './head.css';

class Head extends React.Component{
  render(){
    return(
      <div className="ui inverted segment">
          <div className="logo"><img src={logo} alt="Netflix-React" /></div>

          <div className="ui inverted secondary menu">
            <a className="active red item">
              Home
            </a>
            <Link to='/movie'>
               <a className="item">
                 Browse
               </a>
            </Link>
            <div className="right menu">
            <button className="ui inverted red button">Register</button>
            </div>


        </div>
          </div>
    );
  }
}


export default Head;

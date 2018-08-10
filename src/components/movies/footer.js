import React from 'react';
import './footer.css';

class Footer extends React.Component{
  render(){
    return(
      <div className="ui inverted segment">
        <div className="ui inverted secondary menu">
          <div className="f-note">  Application developed using React-Redux</div>
          <div className="right menu">
            <div className="githublink">
              <a href="https://github.com/sritejas/netflix-react" rel="noopener noreferrer" target="_blank" >Github</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

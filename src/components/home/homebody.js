import React from 'react';
import './homebody.css';
import FirstRow from '../firstrow/firstrow';
class HomeBody extends React.Component{
  render(){
    return(
      <div className='homebody'>
        <div id="largeimage">
            <div className="description-box">
                <h4>NETFLIX ORIGINAL</h4>
                <h1>STRANGER THINGS</h1>
                <h3>Season 2 Available</h3>
                <button id="b1" className="ui inverted red button">PlayNow</button>
                <button className="ui inverted red basic button">Add to Playlist</button>

            </div>
          </div>
          <div id="videosection">
            <h3>New Releases</h3>
            <FirstRow />
          </div>
      </div>
    );
  }
}

export default HomeBody;

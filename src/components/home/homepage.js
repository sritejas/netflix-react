import React from 'react';
import HomeBody from './homebody';
import Head from './head';
import Footer from '../movies/footer';
import './homepage.css';

class HomePage extends React.Component{
  render(){
    return(
      <div className='home'>
        <Head />
        <HomeBody />
        <Footer />
      </div>
    );
  }
}

export default HomePage;

import React from 'react';
import MoviePage from './components/movies/movie_page';
import MovieDetailBody from './components/moviedetail/movie_detail_body';
import { BrowserRouter as Router  } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import App from './App';

class MyRouter extends React.Component{
  render(){
    return(
      <Router>
      <div>
      <Route path="/" exact strict render = {
        () => {
          return (<App />);
        }
      } />
      <Route path="/movie" exact strict render = {
        () => {
          return (<MoviePage />);
        }
      } />
      <Route path="/movie/:id" exact strict render = {
        (props) => {
          return (<MovieDetailBody {...this.props} {...props} />);
        }
      } />

      </div>
      </Router>
    );
  }
}

export default MyRouter;

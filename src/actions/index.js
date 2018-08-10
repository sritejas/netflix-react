import axios from 'axios';
import { tmdbAPIKEY, omdbAPIKEY } from '../config/keys';

export const SEARCH_MOVIE = 'SEARCH_MOVIE';
export const MOVIES_LIST ='MOVIES_LIST';
export const MOVIE_DETAIL = 'MOVIE_DETAIL';
// New releases url
const PMOVIES_URL = 'https://api.themoviedb.org/3/discover/tv?with_genres=14|12|18&primary_release_year=2018&language=en-US?&api_key='+tmdbAPIKEY;
export function selectMovie(movie){
  //selectMovie is an action creator.It needs to return an action ,an action with a type property
  //payload(any name can be used) is the key that contains a value
  //based on the type,it returns an action
  const request = axios.get(PMOVIES_URL);

  return{
    type:MOVIES_LIST,
    payload: request
  };
}

export function fetchMovieDetail(id){
  const request = axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${tmdbAPIKEY}`);
  return{
    type:MOVIE_DETAIL,
    payload:request
  };
}
// omdb api is used for search results
export function searchMovie(title){
  const request = axios.get(`http://www.omdbapi.com/?t=${title}&apikey=${omdbAPIKEY}`);
  return{
    type:SEARCH_MOVIE,
    payload:request
  };
}

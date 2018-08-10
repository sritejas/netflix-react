import { combineReducers } from 'redux';
import MoviesReducer from './movies_reducer';

// This is the combination of all reducers in our application state/redux store
const rootReducer = combineReducers({
  movies:MoviesReducer
});

export default rootReducer;

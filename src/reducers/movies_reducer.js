import { MOVIES_LIST,MOVIE_DETAIL,SEARCH_MOVIE} from '../actions/index';

// all:[] is the list of results we get from api
// there are the two seperate pieces of state, that is one for showing in homepahe list,
// another for showing each selected details page
const INITIAL_STATE = {all:{},detail:null,pResults:[],search:null};

export default function(state=INITIAL_STATE,action){
  console.log(action);
  switch (action.type) {
    case MOVIE_DETAIL:
      return { ...state,detail:action.payload.data };
    case MOVIES_LIST:
      return {...state,all:action.payload.data,pResults:action.payload.data.results};
    case SEARCH_MOVIE:
      return {...state,search:action.payload.data};
    default:
      return state;
}
}

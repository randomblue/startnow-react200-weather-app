import { combineReducers } from 'redux';
import searchBarReducer from './components/SearchBarInput/searchBarReducer'

const rootReducer = combineReducers({
    //add reducer
    search: searchBarReducer
});

export default rootReducer;

import {combineReducer} from 'redux';
import resultsReducer from './resultsReducer';

export default combineReducer({
    posts:resultsReducer
})
//A REDUCER is a function that returns a piece of the application state

import { combineReducers } from 'redux';

import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';
const rootReducer = combineReducers({

  //All our reducers get combined here. For every key we assign a reducer
  //Any key that we define here, ends up as a key on our global state
  books:BooksReducer,
  activeBook: ActiveBook

});

export default rootReducer;

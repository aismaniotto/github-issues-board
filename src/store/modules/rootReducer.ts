import { combineReducers } from 'redux';
import auth from './auth/reducer';
import board from './board/reducer';

export default combineReducers({
  auth,
  board,
});

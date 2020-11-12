import { combineReducers } from 'redux';
import auth from './auth/reducer';
import board from './board/reducer';
import ui from './ui/reducer';

export default combineReducers({
  auth,
  board,
  ui,
});

import { combineReducers } from 'redux';
import auth from './auth/reducer';
import organization from './repoOwner/reducer';
import repository from './repository/reducer';
import board from './board/reducer';
import ui from './ui/reducer';

export default combineReducers({
  auth,
  organization,
  repository,
  board,
  ui,
});

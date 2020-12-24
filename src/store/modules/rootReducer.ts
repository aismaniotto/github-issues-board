import { combineReducers } from 'redux';
import auth from './auth/reducer';
import repoOwner from './repoOwner/reducer';
import repository from './repository/reducer';
import label from './label/reducer';
import issue from './issue/reducer';
import ui from './ui/reducer';

export default combineReducers({
  auth,
  repoOwner,
  repository,
  label,
  issue,
  ui,
});

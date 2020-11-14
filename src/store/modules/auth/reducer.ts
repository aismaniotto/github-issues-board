import { Reducer } from 'redux';
import { AuthState, AuthTypes } from './types';
import {
  getAccessToken,
  hasAccessToken,
} from '../../../services/local-storage/token';
import {
  getUsername,
  hasUsername,
} from '../../../services/local-storage/username';

const INITIAL_STATE: AuthState = {
  signed: hasAccessToken() && hasUsername(),
  token: getAccessToken(),
  username: getUsername(),
};

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.SIGN_REQUEST:
      return state;
    case AuthTypes.SIGN_SUCCESS:
      return {
        ...state,
        signed: true,
        token: action.payload.token,
        username: action.payload.username,
      };
    case AuthTypes.SIGN_FAILURE:
      return {
        ...state,
        signed: false,
        token: '',
        username: '',
      };

    default:
      return state;
  }
};

export default reducer;

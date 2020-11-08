import { Reducer } from 'redux';
import { AuthState, AuthTypes } from './types';
import { hasAccessToken } from '../../../services/local-storage/token';

const INITIAL_STATE: AuthState = {
  signed: hasAccessToken(),
  loading: false,
  error: false,
};

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.SIGN_REQUEST:
      return { ...state, loading: true };
    case AuthTypes.SIGN_SUCCESS:
      return {
        ...state,
        signed: true,
        loading: false,
        error: false,
      };
    case AuthTypes.SIGN_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default reducer;

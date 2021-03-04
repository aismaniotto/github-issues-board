import { Reducer } from 'redux';
import { UiState, UiTypes } from './types';

const INITIAL_STATE: UiState = {
  loading: false,
  errors: [],
};

const reducer: Reducer<UiState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UiTypes.START_LOADING:
      return {
        ...state,
        loading: true,
        errors: [],
      };
    case UiTypes.STOP_LOADING:
      return { ...state, loading: false };
    case UiTypes.SET_ERRORS:
      return {
        loading: false,
        errors: action.payload,
      };
    case UiTypes.CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        error: [],
      };
    default:
      return state;
  }
};

export default reducer;

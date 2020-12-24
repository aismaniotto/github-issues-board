import { Reducer } from 'redux';
import { IssueState, IssueTypes } from './types';

const INITIAL_STATE: IssueState = {
  issues: [],
};

const reducer: Reducer<IssueState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case IssueTypes.GET_ISSUES_REQUEST:
      return { ...state, loading: true };
    case IssueTypes.GET_ISSUES_SUCCESS:
      return {
        ...state,
        issues: action.payload,
      };
    case IssueTypes.GET_ISSUES_FAILURE:
      return {
        ...state,
        issues: [],
      };
    case IssueTypes.CREATE_ISSUE:
      return {
        ...state,
        issues: [...state.issues, action.payload],
      };
    case IssueTypes.UPDATE_ISSUE:
      return {
        ...state,
        issues: [
          ...state.issues.filter(
            (issue) => issue.number !== action.payload.number
          ),
          action.payload,
        ],
      };
    default:
      return state;
  }
};

export default reducer;

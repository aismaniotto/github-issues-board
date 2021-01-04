import { Reducer } from 'redux';
import { RepoOwnerState, RepoOwnerTypes } from './types';
import { getCurrentRepoOwner } from '../../../services/local-storage/repoOwner';
import { getUsername } from '../../../services/local-storage/username';

const INITIAL_STATE: RepoOwnerState = {
  repoOwners: [],
  selectedRepoOwner: {
    login: getCurrentRepoOwner(),
    type: getCurrentRepoOwner() === getUsername() ? 'User' : 'Organization',
  },
};

const reducer: Reducer<RepoOwnerState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RepoOwnerTypes.REPO_OWNERS_REQUEST:
      return state;
    case RepoOwnerTypes.REPO_OWNERS_SUCCESS:
      return {
        ...state,
        repoOwners: action.payload,
      };
    case RepoOwnerTypes.REPO_OWNERS_FAILURE:
      return {
        ...state,
        repoOwners: [],
      };

    case RepoOwnerTypes.REPO_OWNER_SELECT:
      return {
        ...state,
        selectedRepoOwner: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;

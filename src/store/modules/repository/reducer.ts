import { Reducer } from 'redux';
import { RepositoryState, RepositoryTypes } from './types';
import { getCurrentRepoOwner } from '../../../services/local-storage/repoOwner';
import { getCurrentRepository } from '../../../services/local-storage/repository';
import { getUsername } from '../../../services/local-storage/username';

const INITIAL_STATE: RepositoryState = {
  repositories: [],
  selectedRepository: {
    name: getCurrentRepository(),
    owner: {
      login: getCurrentRepoOwner(),
      type: getCurrentRepoOwner() === getUsername() ? 'User' : 'Organization',
    },
  },
};

const reducer: Reducer<RepositoryState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RepositoryTypes.REPOSITORIES_REQUEST:
      return state;
    case RepositoryTypes.REPOSITORIES_SUCCESS:
      return {
        ...state,
        repositories: action.payload,
      };
    case RepositoryTypes.REPOSITORIES_FAILURE:
      return {
        ...state,
        repositories: [],
      };

    case RepositoryTypes.REPOSITORY_SELECT:
      return {
        ...state,
        selectedRepository: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;

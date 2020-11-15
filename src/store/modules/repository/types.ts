import { RepoOwner } from '../repoOwner/types';

/**
 * actions types
 */
export enum RepositoryTypes {
  REPOSITORIES_REQUEST = '@org/REPOSITORIES_REQUEST',
  REPOSITORIES_SUCCESS = '@org/REPOSITORIES_SUCCESS',
  REPOSITORIES_FAILURE = '@org/REPOSITORIES_FAILURE',

  REPOSITORY_SELECT = '@org/REPOSITORY_SELECT',
}

/**
 * state type
 */
export interface Repository {
  name: string;
  owner: RepoOwner;
}

/**
 * state type
 */
export interface RepositoryState {
  repositories: Repository[];
  selectedRepository: Repository;
}

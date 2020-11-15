import { action } from 'typesafe-actions';
import { Repository, RepositoryTypes } from './types';

export const repositoriesResquest = (repoOwner: string) =>
  action(RepositoryTypes.REPOSITORIES_REQUEST, repoOwner);
export const repositoriesSuccess = (repositories: Repository[]) =>
  action(RepositoryTypes.REPOSITORIES_SUCCESS, repositories);
export const repositoriesFailure = () =>
  action(RepositoryTypes.REPOSITORIES_FAILURE);

export const repositoriySelect = (repository: Repository) =>
  action(RepositoryTypes.REPOSITORY_SELECT, repository);

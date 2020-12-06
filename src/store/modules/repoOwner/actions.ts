import { action } from 'typesafe-actions';
import { RepoOwner, RepoOwnerTypes } from './types';

export const repoOwnersResquest = () =>
  action(RepoOwnerTypes.REPO_OWNERS_REQUEST);
export const repoOwnersSuccess = (repoOwner: RepoOwner[]) =>
  action(RepoOwnerTypes.REPO_OWNERS_SUCCESS, repoOwner);
export const repoOwnersFailure = () =>
  action(RepoOwnerTypes.REPO_OWNERS_FAILURE);

export const repoOwnerSelect = (repoOwner: RepoOwner) =>
  action(RepoOwnerTypes.REPO_OWNER_SELECT, repoOwner);

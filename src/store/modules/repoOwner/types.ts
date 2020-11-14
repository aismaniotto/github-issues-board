/**
 * actions types
 */
export enum RepoOwnerTypes {
  REPO_OWNERS_REQUEST = '@repoOwner/REPO_OWNERS_REQUEST',
  REPO_OWNERS_SUCCESS = '@repoOwner/REPO_OWNERS_SUCCESS',
  REPO_OWNERS_FAILURE = '@repoOwner/REPO_OWNERS_FAILURE',

  REPO_OWNER_SELECT = '@repoOwner/REPO_OWNER_SELECT',
}

/**
 * state type
 */
export interface RepoOwner {
  login: string;
  type: string;
}

/**
 * state type
 */
export interface RepoOwnerState {
  repoOwners: RepoOwner[];
  selectedRepoOwner: RepoOwner;
}

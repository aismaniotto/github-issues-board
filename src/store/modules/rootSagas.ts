import { all, takeLatest } from 'redux-saga/effects';
import { signIn } from './auth/sagas';
import { AuthTypes } from './auth/types';
import { requestRepoOwners, requestRepositoriesAfterSelectOwner } from './repoOwner/sagas';
import { RepoOwnerTypes } from './repoOwner/types';
import { requestRepositories } from './repository/sagas';
import { RepositoryTypes } from './repository/types';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.SIGN_REQUEST, signIn),
    takeLatest(RepoOwnerTypes.REPO_OWNERS_REQUEST, requestRepoOwners),
    takeLatest(RepoOwnerTypes.REPO_OWNER_SELECT, requestRepositoriesAfterSelectOwner),
    takeLatest(RepositoryTypes.REPOSITORIES_REQUEST, requestRepositories),
  ]);
}

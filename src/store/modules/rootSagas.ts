import { all, takeLatest } from 'redux-saga/effects';
import { signIn } from './auth/sagas';
import { AuthTypes } from './auth/types';
import { requestOrganizations } from './repoOwner/sagas';
import { RepoOwnerTypes } from './repoOwner/types';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.SIGN_REQUEST, signIn),
    takeLatest(RepoOwnerTypes.REPO_OWNERS_REQUEST, requestOrganizations),
  ]);
}

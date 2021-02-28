import { all, takeLatest } from 'redux-saga/effects';
import { logout, signIn } from './auth/sagas';
import { AuthTypes } from './auth/types';
import { requestLabels } from './label/sagas';
import { LabelTypes } from './label/types';
import { IssueTypes } from './issue/types';
import {
  requestRepoOwners,
  requestRepositoriesAfterSelectOwner,
} from './repoOwner/sagas';
import { RepoOwnerTypes } from './repoOwner/types';
import { requestRepositories } from './repository/sagas';
import { RepositoryTypes } from './repository/types';
import { closeIssue, requestIssues, updateIssue, reopenIssue } from './issue/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.SIGN_REQUEST, signIn),
    takeLatest(AuthTypes.LOGOUT_REQUEST, logout),
    takeLatest(RepoOwnerTypes.REPO_OWNERS_REQUEST, requestRepoOwners),
    takeLatest(
      RepoOwnerTypes.REPO_OWNER_SELECT,
      requestRepositoriesAfterSelectOwner
    ),
    takeLatest(RepositoryTypes.REPOSITORIES_REQUEST, requestRepositories),
    takeLatest(LabelTypes.GET_LABELS_REQUEST, requestLabels),
    takeLatest(IssueTypes.GET_ISSUES_REQUEST, requestIssues),
    takeLatest(IssueTypes.UPDATE_ISSUE_REQUEST, updateIssue),
    takeLatest(IssueTypes.CLOSE_ISSUE_REQUEST, closeIssue),
    takeLatest(IssueTypes.REOPEN_ISSUE_REQUEST, reopenIssue),
  ]);
}

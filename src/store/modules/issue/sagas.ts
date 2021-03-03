import { call, put } from 'redux-saga/effects';
import {
  getIssuesSuccess,
  getIssuesFailure,
  getIssuesRequest,
} from './actions';
import {
  stopLoading,
  setErrors,
  startLoading,
  clearErrors,
} from '../ui/actions';
import {
  getIssues,
  updateIssue as updateIssueApi,
  closeIssue as closeIssueApi,
  reopenIssue as reopenIssueApi,
} from '../../../services/api/issue';
import { getCurrentRepoOwner } from '../../../services/local-storage/repoOwner';
import { getCurrentRepository } from '../../../services/local-storage/repository';
import { Issue, IssueTypes } from './types';

export function* requestIssues() {
  try {
    yield put(startLoading());
    const response = yield call(
      getIssues,
      getCurrentRepoOwner(),
      getCurrentRepository()
    );
    if (response.status === 200) {
      yield put(getIssuesSuccess(response.data));
      yield put(stopLoading());
    } else {
      yield put(getIssuesFailure());
      yield put(setErrors(['not possible get the issues']));
    }
  } catch (err) {
    yield put(getIssuesFailure());
    yield put(setErrors([err.response.status]));
  }
}

export function* updateIssue({
  payload,
}: {
  type: typeof IssueTypes.UPDATE_ISSUE_REQUEST;
  payload: Issue;
}) {
  try {
    const response = yield call(
      updateIssueApi,
      getCurrentRepoOwner(),
      getCurrentRepository(),
      payload
    );
    if (response.status === 200) {
      yield put(clearErrors());
    } else {
      yield put(getIssuesRequest());
      yield put(setErrors(['not possible update the issue']));
    }
  } catch (err) {
    yield put(setErrors([err.response.status]));
    yield put(getIssuesRequest());
  }
}

export function* closeIssue({
  payload,
}: {
  type: typeof IssueTypes.CLOSE_ISSUE_REQUEST;
  payload: Issue;
}) {
  try {
    const response = yield call(
      closeIssueApi,
      getCurrentRepoOwner(),
      getCurrentRepository(),
      payload
    );
    if (response.status === 200) {
      yield put(clearErrors());
    } else {
      yield put(getIssuesRequest());
      yield put(setErrors(['not possible close the issue']));
    }
  } catch (err) {
    yield put(setErrors([err.response.status]));
    yield put(getIssuesRequest());
  }
}

export function* reopenIssue({
  payload,
}: {
  type: typeof IssueTypes.REOPEN_ISSUE_REQUEST;
  payload: Issue;
}) {
  try {
    const response = yield call(
      reopenIssueApi,
      getCurrentRepoOwner(),
      getCurrentRepository(),
      payload
    );
    if (response.status === 200) {
      yield put(clearErrors());
    } else {
      yield put(getIssuesRequest());
      yield put(setErrors(['not possible reopen the issue']));
    }
  } catch (err) {
    yield put(setErrors([err.response.status]));
    yield put(getIssuesRequest());
  }
}

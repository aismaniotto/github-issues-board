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
} from '../../../services/api/issue';
import { getCurrentRepoOwner } from '../../../services/local-storage/organization';
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
  } finally {
    yield put(stopLoading());
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
      put(clearErrors());
    } else {
      put(getIssuesRequest());
      put(setErrors(['not possible update the issue']));
    }
  } catch (err) {
    yield put(setErrors([err.response.status]));
    put(getIssuesRequest());
  }
}

import { call, put } from 'redux-saga/effects';
import { getIssuesSuccess, getIssuesFailure } from './actions';
import { stopLoading, setErrors, startLoading } from '../ui/actions';
import { getIssues } from '../../../services/api/issue';
import { getCurrentRepoOwner } from '../../../services/local-storage/organization';
import { getCurrentRepository } from '../../../services/local-storage/repository';

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

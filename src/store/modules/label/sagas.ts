import { call, put } from 'redux-saga/effects';
import { getLabelsSuccess, getLabelsFailure } from './actions';
import { stopLoading, setErrors, startLoading } from '../ui/actions';
import { getLabels } from '../../../services/api/label';
import { getCurrentRepoOwner } from '../../../services/local-storage/organization';
import { getCurrentRepository } from '../../../services/local-storage/repository';

export function* requestLabels() {
  try {
    yield put(startLoading());
    const response = yield call(
      getLabels,
      getCurrentRepoOwner(),
      getCurrentRepository()
    );
    if (response.status === 200) {
      yield put(getLabelsSuccess(response.data));
      yield put(stopLoading());
    } else {
      yield put(getLabelsFailure());
      yield put(setErrors(['not possible get the labels']));
    }
  } catch (err) {
    yield put(getLabelsFailure());
    yield put(setErrors([err.response.status]));
  } finally {
    yield put(stopLoading());
  }
}

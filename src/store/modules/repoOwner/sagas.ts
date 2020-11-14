import { call, put } from 'redux-saga/effects';
import { repoOwnersSuccess, repoOwnersFailure } from './actions';
import { stopLoading, setErrors, startLoading } from '../ui/actions';
import { getOrganizations } from '../../../services/api/organization';
import { getUsername } from '../../../services/local-storage/username';

export function* requestOrganizations() {
  try {
    yield put(startLoading());
    const response = yield call(getOrganizations);
    if (response.status === 200) {
      const repoOwnerList = [
        { login: getUsername(), type: 'User' },
        ...response.data,
      ];
      yield put(repoOwnersSuccess(repoOwnerList));
      yield put(stopLoading());
    } else {
      yield put(repoOwnersFailure());
      yield put(setErrors(['not possible get the organizations']));
    }
  } catch (err) {
    yield put(repoOwnersFailure());
    yield put(setErrors([err.response.status]));
  } finally {
    yield put(stopLoading());
  }
}

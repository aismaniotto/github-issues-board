import { call, put } from 'redux-saga/effects';
import { repositoriesSuccess, repositoriesFailure } from './actions';
import { stopLoading, setErrors, startLoading } from '../ui/actions';
import {
  getRepositoriesFromUser,
  getRepositoriesFromOrganization,
} from '../../../services/api/repository';
import { getUsername } from '../../../services/local-storage/username';
import { RepositoryTypes } from './types';

export function* requestRepositories({
  payload,
}: {
  type: typeof RepositoryTypes.REPOSITORIES_REQUEST;
  payload: string;
}) {
  try {
    yield put(startLoading());

    const response =
      getUsername() === 'User'
        ? yield call(getRepositoriesFromUser)
        : yield call(getRepositoriesFromOrganization, payload);

    if (response.status === 200) {
      yield put(repositoriesSuccess(response.data));
      yield put(stopLoading());
    } else {
      yield put(repositoriesFailure());
      yield put(setErrors(['not possible get the repositories']));
    }
  } catch (err) {
    yield put(repositoriesFailure());
    yield put(setErrors([err.response.status]));
  } finally {
    yield put(stopLoading());
  }
}

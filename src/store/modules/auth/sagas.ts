import { call, put } from 'redux-saga/effects';
import { signSuccess, signFailure } from './actions';
import { stopLoading, setErrors, startLoading } from '../ui/actions';
import { AuthTypes } from './types';
import { saveAccessToken } from '../../../services/local-storage/token';
import { getUser } from '../../../services/api/auth';
import { saveUsername } from '../../../services/local-storage/username';

export function* signIn({
  payload,
}: {
  type: typeof AuthTypes.SIGN_REQUEST;
  payload: string;
}) {
  try {
    yield put(startLoading());
    const response = yield call(getUser, payload);
    if (response.status === 200) {
      const { login } = response.data;
      saveAccessToken(payload);
      saveUsername(login);

      yield put(signSuccess({ token: payload, username: login }));
    } else {
      yield put(signFailure());
      yield put(setErrors(['invalid token']));
    }
  } catch (err) {
    yield put(signFailure());
    yield put(setErrors([err.response.status]));
  } finally {
    yield put(stopLoading());
  }
}

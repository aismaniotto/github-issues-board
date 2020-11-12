import { call, put } from 'redux-saga/effects';
import { signSuccess, signFailure } from './actions';
import { stopLoading, setErrors } from '../ui/actions';
import { AuthTypes } from './types';
import { saveAccessToken } from '../../../services/local-storage/token';
import { getUser } from '../../../services/api/auth';

export function* signIn({
  payload,
}: {
  type: typeof AuthTypes.SIGN_REQUEST;
  payload: string;
}) {
  try {
    const response = yield call(getUser, payload);
    if (response.status === 200) {
      saveAccessToken(payload);
      yield put(signSuccess());
      yield put(stopLoading());
    } else {
      yield put(signFailure());
      yield put(setErrors(['invalid token']));
    }
  } catch (err) {
    yield put(signFailure());
    yield put(setErrors(['invalid token']));
  }
}

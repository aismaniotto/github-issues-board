import { call, put } from 'redux-saga/effects';
import { signSuccess, signFailure } from './actions';
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
    } else {
      yield put(signFailure());
    }
  } catch (err) {
    yield put(signFailure());
  }
}

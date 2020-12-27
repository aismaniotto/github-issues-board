import { action } from 'typesafe-actions';
import { AuthTypes } from './types';

export const signResquest = (token: string) =>
  action(AuthTypes.SIGN_REQUEST, token);
export const signSuccess = (auth: { username: string; token: string }) =>
  action(AuthTypes.SIGN_SUCCESS, auth);
export const signFailure = () => action(AuthTypes.SIGN_FAILURE);

export const logoutRequest = () => action(AuthTypes.LOGOUT_REQUEST);

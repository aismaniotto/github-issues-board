import { action } from 'typesafe-actions';
import { AuthTypes } from './types';

export const signResquest = (token: string) =>
  action(AuthTypes.SIGN_REQUEST, token);
export const signSuccess = () => action(AuthTypes.SIGN_SUCCESS);
export const signFailure = () => action(AuthTypes.SIGN_FAILURE);

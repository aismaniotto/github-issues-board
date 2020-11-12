import { action } from 'typesafe-actions';
import { UiTypes } from './types';

export const startLoading = () => action(UiTypes.START_LOADING);
export const stopLoading = () => action(UiTypes.STOP_LOADING);
export const setErrors = (errors: string[]) =>
  action(UiTypes.SET_ERRORS, errors);
export const clearErrors = () => action(UiTypes.CLEAR_ERRORS);

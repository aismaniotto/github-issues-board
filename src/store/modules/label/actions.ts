import { action } from 'typesafe-actions';
import { Label, LabelTypes } from './types';

export const getLabelsRequest = () => action(LabelTypes.GET_LABELS_REQUEST);
export const getLabelsSuccess = (labels: Label[]) =>
  action(LabelTypes.GET_LABELS_SUCCESS, labels);
export const getLabelsFailure = () => action(LabelTypes.GET_LABELS_FAILURE);

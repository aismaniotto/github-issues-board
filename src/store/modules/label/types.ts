/**
 * actions types
 */
export enum LabelTypes {
  GET_LABELS_REQUEST = 'GET_LABELS_REQUEST',
  GET_LABELS_SUCCESS = 'GET_LABELS_SUCCESS',
  GET_LABELS_FAILURE = 'GET_LABELS_FAILUTE',
}

/**
 * data types
 */
export interface Label {
  name: string;
  description: string;
  color: string;
}

/**
 * state type
 */
export interface LabelState {
  readonly allLabels: Label[];
  readonly labels: Label[];
  readonly lanes: Label[];
}

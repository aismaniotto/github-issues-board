/**
 * actions types
 */
export enum UiTypes {
  START_LOADING = '@ui/START_LOADING',
  STOP_LOADING = '@ui/STOP_LOADING',
  SET_ERRORS = '@ui/SET_ERRORS',
  CLEAR_ERRORS = '@ui/CLEAR_ERRORS',
}

/**
 * state type
 */
export interface UiState {
  readonly loading: boolean;
  readonly errors: string[];
}

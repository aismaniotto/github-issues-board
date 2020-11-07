/**
 * actions types
 */
export enum AuthTypes {
  SIGN_REQUEST = '@auth/SIGN_REQUEST',
  SIGN_SUCCESS = '@auth/SIGN_SUCCESS',
  SIGN_FAILURE = '@auth/SIGN_FAILURE',
}

/**
 * state type
 */
export interface AuthState {
  readonly signed: boolean;
  readonly loading: boolean;
  readonly error: boolean;
}

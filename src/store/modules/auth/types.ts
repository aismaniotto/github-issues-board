/**
 * actions types
 */
export enum AuthTypes {
  SIGN_REQUEST = '@auth/SIGN_REQUEST',
  SIGN_SUCCESS = '@auth/SIGN_SUCCESS',
  SIGN_FAILURE = '@auth/SIGN_FAILURE',
  LOGOUT_REQUEST = '@auth/LOGOUT_REQUEST',
}

/**
 * state type
 */
export interface AuthState {
  readonly signed: boolean;
  readonly token: string;
  readonly username: string;
}

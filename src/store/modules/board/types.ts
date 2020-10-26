/**
 * actions types
 */
export enum BoardTypes {
  GET_ISSUES_REQUEST = 'GET_ISSUES_REQUEST',
  GET_ISSUES_SUCCESS = 'GET_ISSUES_SUCCESS',
  GET_ISSUES_FAILURE = 'GET_ISSUES_FAILUTE',

  MOVE_ISSUE = 'MOVE_ISSUE',
  CREATE_ISSUE = 'CREATE_ISSUE',
  UPDATE_ISSUE = 'UPDATE_ISSUE',
}

/**
 * data types
 */
export interface Issue {
  id: number;
  title: string;
  lane: string;
}

export interface Lane {
  name: string;
  issues: Issue[];
}

/**
 * state type
 */
export interface BoardState {
  readonly repository: string;
  readonly lanes: Lane[];
  readonly loading: boolean;
  readonly error: boolean;
}

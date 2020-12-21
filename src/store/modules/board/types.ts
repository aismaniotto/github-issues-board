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
export interface Label {
  name: number;
  description: string;
  color: string;
}

export interface Issue {
  number: number;
  title: string;
  body?: string;
  labels?: Label[];
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

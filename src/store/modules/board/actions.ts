import { action } from 'typesafe-actions';
import { BoardTypes, Issue } from './types';

export const getIssuesRequest = () => action(BoardTypes.GET_ISSUES_REQUEST);
export const getIssuesSuccess = (issues: Issue[]) => action(BoardTypes.GET_ISSUES_SUCCESS, issues);
export const getIssuesFailure = () => action(BoardTypes.GET_ISSUES_FAILURE);

export const createIssue = (issue: Issue) => action(BoardTypes.CREATE_ISSUE, issue);
export const updateIssue = (issue: Issue) => action(BoardTypes.UPDATE_ISSUE, issue);

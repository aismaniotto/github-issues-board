import { action } from 'typesafe-actions';
import { IssueTypes, Issue } from './types';

export const getIssuesRequest = () => action(IssueTypes.GET_ISSUES_REQUEST);
export const getIssuesSuccess = (issues: Issue[]) =>
  action(IssueTypes.GET_ISSUES_SUCCESS, issues);
export const getIssuesFailure = () => action(IssueTypes.GET_ISSUES_FAILURE);

export const createIssue = (issue: Issue) =>
  action(IssueTypes.CREATE_ISSUE, issue);
export const updateIssue = (issue: Issue) =>
  action(IssueTypes.UPDATE_ISSUE, issue);

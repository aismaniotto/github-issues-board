import { action } from 'typesafe-actions';
import { IssueTypes, Issue } from './types';

export const getIssuesRequest = () => action(IssueTypes.GET_ISSUES_REQUEST);
export const getIssuesSuccess = (issues: Issue[]) =>
  action(IssueTypes.GET_ISSUES_SUCCESS, issues);
export const getIssuesFailure = () => action(IssueTypes.GET_ISSUES_FAILURE);

export const createIssueResquest = (issue: Issue) =>
  action(IssueTypes.CREATE_ISSUE_REQUEST, issue);
export const updateIssueRequest = (issue: Issue) =>
  action(IssueTypes.UPDATE_ISSUE_REQUEST, issue);
export const closeIssueRequest = (issue: Issue) =>
    action(IssueTypes.CLOSE_ISSUE_REQUEST, issue);
export const reopenIssueRequest = (issue: Issue) =>
  action(IssueTypes.REOPEN_ISSUE_REQUEST, issue);

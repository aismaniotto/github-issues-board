import api from '.';
import { Issue } from '../../store/modules/issue/types';

export const getIssues = (owner: string, repo: string) => {
  const config = {
    params: {
      state: 'all',
    },
  };
  return api.get(`/repos/${owner}/${repo}/issues`, config);
};

export const newIssue = (owner: string, repo: string, issue: Issue) => {
  const data = {
    title: issue.title,
    body: issue.body,
    labels: issue.labels?.map((label) => label.name),
  };
  return api.post(`/repos/${owner}/${repo}/issues`, data);
};

export const updateIssue = (owner: string, repo: string, issue: Issue) => {
  const data = {
    title: issue.title,
    body: issue.body,
    labels: issue.labels?.map((label) => label.name),
    closed_at: issue.closed_at,
    state: issue.state
  };
  return api.patch(`/repos/${owner}/${repo}/issues/${issue.number}`, data);
};

export const closeIssue = (owner: string, repo: string, issue: Issue) => {
  const data = {
    state: 'closed',
  };
  return api.patch(`/repos/${owner}/${repo}/issues/${issue.number}`, data);
};

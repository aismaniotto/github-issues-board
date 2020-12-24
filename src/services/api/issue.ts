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
  const body = {
    title: issue.title,
    body: issue.body,
    labels: issue.labels?.map((label) => label.name),
  };
  return api.post(`/repos/${owner}/${repo}/issues`, body);
};

export const updateIssue = (owner: string, repo: string, issue: Issue) => {
  const body = {
    title: issue.title,
    body: issue.body,
    labels: issue.labels?.map((label) => label.name),
  };
  return api.post(`/repos/${owner}/${repo}/issues/${issue.number}`, body);
};

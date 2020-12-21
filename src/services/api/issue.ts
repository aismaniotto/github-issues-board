import api from '.';
import { Issue } from '../../store/modules/board/types';

export const getIssues = (owner: string, repo: string) =>
  api.get(`/repo/${owner}/${repo}/issues`);

export const newIssue = (owner: string, repo: string, issue: Issue) => {
  const body = {
    title: issue.title,
    body: issue.body,
    labels: issue.labels?.map((label) => label.name),
  };
  return api.post(`/repo/${owner}/${repo}/issues`, body);
};

export const updateIssue = (owner: string, repo: string, issue: Issue) => {
  const body = {
    title: issue.title,
    body: issue.body,
    labels: issue.labels?.map((label) => label.name),
  };
  return api.post(`/repo/${owner}/${repo}/issues/${issue.number}`, body);
};

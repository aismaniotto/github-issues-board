import api from '.';

export const getLabels = (owner: string, repo: string) =>
  api.get(`/repo/${owner}/${repo}/labels`);

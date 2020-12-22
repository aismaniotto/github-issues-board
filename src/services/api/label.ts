import api from '.';

export const getLabels = (owner: string, repo: string) =>
  api.get(`/repos/${owner}/${repo}/labels`);

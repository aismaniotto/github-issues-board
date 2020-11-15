import api from '.';

export const getRepositoriesFromUser = () => api.get('/user/repos');

export const getRepositoriesFromOrganization = (organization: string) =>
  api.get(`/orgs/${organization}/repos`);

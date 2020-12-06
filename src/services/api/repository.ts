import api from '.';

export const getRepositoriesFromUser = () => {
  const config = {
    params: {
      affiliation: 'owner',
    },
  };

  return api.get('/user/repos', config);
};

export const getRepositoriesFromOrganization = (organization: string) =>
  api.get(`/orgs/${organization}/repos`);

import api from '.';

export const getUser = (token: string) => {
  const config = {
    headers: {
      Authorization: `token ${token}`,
    },
  };
  return api.get('/user', config);
};

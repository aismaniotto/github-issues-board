import baseApi from './base-api';

export const getUser = (token: string) => {
  const config = {
    headers: {
      Authorization: `token ${token}`,
    },
  };
  return baseApi.get('/user', config);
};

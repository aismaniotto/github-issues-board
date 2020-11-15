const personalAccessToken = 'PERSONAL_ACCESS_TOKEN';

export const saveAccessToken = (token: string) => {
  localStorage.setItem(personalAccessToken, token);
  return token;
};

export const deleteAccessToken = () => {
  localStorage.removeItem(personalAccessToken);
};

export const getAccessToken = () =>
  localStorage.getItem(personalAccessToken) ?? '';

export const hasAccessToken = () => getAccessToken() !== '';

const accountUsername = 'USERNAME';

export const saveUsername = (username: string) => {
  localStorage.setItem(accountUsername, username);
  return username;
};

export const deleteUsername = () => {
  localStorage.removeItem(accountUsername);
};

export const getUsername = () => localStorage.getItem(accountUsername) ?? '';

export const hasUsername = () => getUsername() != null;

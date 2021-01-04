const currentOrganization = 'CURRENT_REPO_OWNER';

export const saveCurrentRepoOwner = (repoOwner: string) => {
  localStorage.setItem(currentOrganization, repoOwner);
  return repoOwner;
};

export const deleteCurrentRepoOwner = () => {
  localStorage.removeItem(currentOrganization);
};

export const getCurrentRepoOwner = () =>
  localStorage.getItem(currentOrganization) ?? '';

export const hasCurrentRepoOwner = () => getCurrentRepoOwner() !== '';

const currentOrganization = 'CURRENT_ORGANIZATION';

export const saveCurrentOrganization = (organization: string) => {
  localStorage.setItem(currentOrganization, organization);
  return organization;
};

export const deleteCurrentOrganization = () => {
  localStorage.removeItem(currentOrganization);
};

export const getCurrentOrganization = () =>
  localStorage.getItem(currentOrganization);

export const hasCurrentOrganization = () => getCurrentOrganization() != null;

const currentRepository = 'CURRENT_Repository';

export const saveCurrentRepository = (repository: string) => {
  localStorage.setItem(currentRepository, repository);
  return repository;
};

export const deleteCurrentRepository = () => {
  localStorage.removeItem(currentRepository);
};

export const getCurrentRepository = () =>
  localStorage.getItem(currentRepository) ?? '';

export const hasCurrentRepository = () => getCurrentRepository() !== '';

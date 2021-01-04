import React, { useEffect, useCallback } from 'react';
import {
  Button, FormControl, InputLabel, MenuItem, Select,
} from '@material-ui/core';
import { Repository, RepositoryState } from '../store/modules/repository/types';
import { RepoOwner, RepoOwnerState } from '../store/modules/repoOwner/types';
import Loader from './loader';
import { UiState } from '../store/modules/ui/types';
import { saveCurrentRepoOwner } from '../services/local-storage/repoOwner';
import { saveCurrentRepository } from '../services/local-storage/repository';
import Styles from '../styles/components/select-repo-form';

interface StateProps {
  ui: UiState,
  repoOwner: RepoOwnerState,
  repository: RepositoryState,
}

interface DispatchProps {
  repoOwnersResquest(): void;
  repoOwnerSelect(repoOwner: RepoOwner): void;
  repositoriesResquest(repoOwner: string): void;
  repositoriySelect(repository: Repository): void;
}

type Props = StateProps & DispatchProps;

const SelectRepoPage: React.FC<Props> = (props:Props) => {
  const classes = Styles();

  const {
    ui,
    repoOwner,
    repoOwnersResquest,
    repoOwnerSelect,
    repository,
    repositoriesResquest,
    repositoriySelect,
  } = props;

  useEffect(() => {
    repoOwnersResquest();
  }, [repoOwnersResquest]);

  useEffect(() => {
    if (repoOwner.selectedRepoOwner.login !== '') {
      repositoriesResquest(repoOwner.selectedRepoOwner.login);
    }
  }, []);

  const handleChangeOrganizations = (event: React.ChangeEvent<{ value: unknown }>) => {
    const selectedOwner = repoOwner.repoOwners.find(
      (owner) => owner.login === event.target.value,
    );
    if (selectedOwner) { repoOwnerSelect(selectedOwner); }
  };

  const handleChangeRepository = (event: React.ChangeEvent<{ value: unknown }>) => {
    const selectedRepo = repository.repositories.find((repo) => repo.name === event.target.value);
    if (selectedRepo) { repositoriySelect(selectedRepo); }
  };

  const handleSubmit = useCallback(async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (repoOwner.selectedRepoOwner.login && repository.selectedRepository.name) {
      saveCurrentRepoOwner(repoOwner.selectedRepoOwner.login);
      saveCurrentRepository(repository.selectedRepository.name);

      window.location.href = '/';
    }
  }, [repoOwner.selectedRepoOwner.login, repository.selectedRepository.name]);

  return (
    <div className={classes.root}>
      {ui.loading && <Loader />}
      <form onSubmit={handleSubmit}>
        <FormControl className={classes.formControl} fullWidth>
          <InputLabel id="repoOWners-label">Repo owners</InputLabel>
          <Select
            labelId="repoOwners-label"
            id="repoOwners"
            value={repoOwner.selectedRepoOwner.login}
            onChange={handleChangeOrganizations}
          >
            {repoOwner.repoOwners.map((owner) => (
              <MenuItem key={owner.login} value={owner.login}>{owner.login}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl className={classes.formControl} fullWidth>
          <InputLabel id="repositories-label">Repositories</InputLabel>
          <Select
            labelId="repositories-label"
            id="repositories"
            value={repository.selectedRepository.name}
            onChange={handleChangeRepository}
          >
            {repository.repositories.map((repo) => (
              <MenuItem key={repo.name} value={repo.name}>{repo.name}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          className={classes.margin}
        >
          Ok
        </Button>
      </form>
    </div>
  );
};

export default SelectRepoPage;

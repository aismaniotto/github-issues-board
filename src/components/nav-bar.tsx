import {
  AppBar, Button, Link, Toolbar, Typography,
} from '@material-ui/core';
import React from 'react';
import { RepositoryState } from '../store/modules/repository/types';
import Style from '../styles/components/nav-bar';

interface StateProps {
  repository: RepositoryState,
}

interface DispatchProps {
  logoutRequest(): void;
}

type Props = StateProps & DispatchProps;

const NavBar: React.FC<Props> = (props: Props) => {
  const classes = Style();

  const { repository, logoutRequest } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" color="inherit">
            <MenuIcon />
          </IconButton> */}
          <div className={classes.title}>
            <Typography variant="h5" className={classes.repoName}>
              {repository.selectedRepository.name}
            </Typography>
            <Typography variant="h6">
              (
              {repository.selectedRepository.owner.login}
              )
            </Typography>
          </div>
          <Button color="inherit" onClick={() => { window.location.href = '/select-repo'; }}>
            Change Repository
          </Button>
          <Button color="inherit" onClick={() => logoutRequest()}>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;

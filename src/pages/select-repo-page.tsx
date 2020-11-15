import React from 'react';
import {
  Button, Container, FormControl, InputLabel, MenuItem, Select, Typography,
} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme:Theme) => createStyles({
  root: {
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.default,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    width: 'auto',
    padding: '1rem',
    backgroundColor: '#FFFFFF',
    borderRadius: '5px',
    boxShadow:
          '0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important',
  },
  margin: {
    marginTop: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const SelectRepoPage: React.FC = () => {
  const classes = useStyles();

  const [organization, setOrganization] = React.useState('');
  const handleChangeOrganizations = (event: React.ChangeEvent<{ value: unknown }>) => {
    setOrganization(event.target.value as string);
  };

  const [repository, setRepository] = React.useState('');
  const handleChangeRepository = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRepository(event.target.value as string);
  };

  return (
    <div className={classes.root}>
      <Container className={classes.content}>
        <Typography variant="h2">
          Select Page
        </Typography>

        <FormControl className={classes.formControl} fullWidth>
          <InputLabel id="organizations-label">Organizations</InputLabel>
          <Select
            labelId="organizations-label"
            id="organizations"
            value={organization}
            onChange={handleChangeOrganizations}
          >
            <MenuItem value={1}>Some-Organization</MenuItem>
            <MenuItem value={2}>@aismaniotto</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl} fullWidth>
          <InputLabel id="repositories-label">Repositories</InputLabel>
          <Select
            labelId="repositories-label"
            id="repositories"
            value={repository}
            onChange={handleChangeRepository}
          >
            <MenuItem value={1}>github-board-issues</MenuItem>
            <MenuItem value={2}>recipe-app</MenuItem>
            <MenuItem value={3}>tic-tac-toe</MenuItem>
            <MenuItem value={4}>RColetum</MenuItem>
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

      </Container>
    </div>
  );
};

export default SelectRepoPage;

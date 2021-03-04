import React from 'react';
import {
  Container, Typography,
} from '@material-ui/core';
import SelectRepoFormCont from '../containers/select-repo-form.container';
import Styles from '../styles/pages/select-repo-page';
import BasePage from '../components/base-page';

const SelectRepoPage: React.FC = () => {
  const classes = Styles();

  return (
    <BasePage>
      <div className={classes.root}>
        <Container className={classes.content}>
          <Typography variant="h2">
            Select Repository
          </Typography>
          <SelectRepoFormCont />
        </Container>
      </div>
    </BasePage>
  );
};

export default SelectRepoPage;

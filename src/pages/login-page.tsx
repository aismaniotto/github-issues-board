import { Container, Typography } from '@material-ui/core';
import React from 'react';
import BasePage from '../components/base-page';
import TokenAuthFormCont from '../containers/token-auth-form.container';
import Style from '../styles/pages/login-page';

const LoginPage: React.FC = () => {
  const classes = Style();

  return (
    <BasePage>
      <div className={classes.root}>
        <Container className={classes.content}>
          <Typography variant="h2">
            GITHUB-ISSUES-BOARD
          </Typography>
          <TokenAuthFormCont />
        </Container>
      </div>
    </BasePage>
  );
};

export default LoginPage;

import { Container, Typography } from '@material-ui/core';
import React from 'react';
import TokenAuthFormCont from '../containers/token-auth-form.container';
import Style from '../styles/pages/login-page';

const LoginPage: React.FC = () => {
  const classes = Style();

  return (
    <div className={classes.root}>
      <Container className={classes.content}>
        <Typography variant="h2">
          GITHUB-ISSUES-BOARD
        </Typography>
        <TokenAuthFormCont />
      </Container>
    </div>
  );
};

export default LoginPage;

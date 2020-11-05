import { Container, Typography } from '@material-ui/core';
import React from 'react';
import TokenAuthForm from '../components/token-auth-form';
import Style from '../styles/pages/login-page';

const LoginPage: React.FC = () => {
  const classes = Style();

  return (
    <div className={classes.root}>
      <Container className={classes.content}>
        <Typography variant="h2">
          GITHUB-ISSUES-BOARD
        </Typography>
        <TokenAuthForm />
      </Container>
    </div>
  );
};

export default LoginPage;

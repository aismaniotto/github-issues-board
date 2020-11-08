import React from 'react';
import {
  Switch, Route, BrowserRouter,
} from 'react-router-dom';
import PrivateRoute from '../components/private-route';
import HomePage from '../pages/home-page';
import { hasAccessToken } from '../services/local-storage-service';

import LoginPage from '../pages/login-page';

const PrimaryRoute = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <PrivateRoute isSignedIn={hasAccessToken()} path="/" exact component={HomePage} />
        <PrivateRoute isSignedIn={hasAccessToken()} path="/home" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />

        <Route path="*" component={() => <h1>PAGE NOT FOUND</h1>} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default PrimaryRoute;

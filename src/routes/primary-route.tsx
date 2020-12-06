import React from 'react';
import {
  Switch, Route, BrowserRouter,
} from 'react-router-dom';
import HomePage from '../pages/home-page';

import LoginPage from '../pages/login-page';
import PrivateRouteLvl1Container from '../containers/private-route-lvl1.container';
import PrivateRouteLvl2Container from '../containers/private-route-lvl2.container';
import SelectRepoPage from '../pages/select-repo-page';

const PrimaryRoute = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={LoginPage} />

        <PrivateRouteLvl1Container path="/select-repo" exact component={SelectRepoPage} />

        <PrivateRouteLvl2Container path="/" exact component={HomePage} />
        <PrivateRouteLvl2Container path="/home" exact component={HomePage} />

        <Route path="*" component={() => <h1>PAGE NOT FOUND</h1>} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default PrimaryRoute;

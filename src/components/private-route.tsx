import React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface Props {
    component: React.FC;
    isSignedIn: boolean;
    path: string;
    exact: boolean;
  }

const PrivateRoute: React.FC<Props> = (props: Props) => {
  const {
    isSignedIn, path, exact, component,
  } = props;

  return isSignedIn ? (<Route path={path} exact={exact} component={component} />)
    : (<Redirect to="/login" />);
};
export default PrivateRoute;

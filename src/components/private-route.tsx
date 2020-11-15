import React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface Props {
    component: React.FC;
    path: string;
    exact: boolean;
    condition: boolean;
    failedPath: string;
  }

const PrivateRoute: React.FC<Props> = (props: Props) => {
  const {
    condition, path, exact, component, failedPath,
  } = props;

  return condition ? (<Route path={path} exact={exact} component={component} />)
    : (<Redirect to={failedPath} />);
};
export default PrivateRoute;

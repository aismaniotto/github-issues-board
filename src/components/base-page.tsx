import React from 'react';
import ErrorDialogContainer from '../containers/error-dialog.container';
import LoaderContainer from '../containers/loader.container';

interface Props {
  children: React.ReactNode,
}

const BasePage: React.FC<Props> = (props: Props) => {
  const { children } = props;

  return (
    <>
      <LoaderContainer />
      <ErrorDialogContainer />
      {children}
    </>
  );
};
export default BasePage;

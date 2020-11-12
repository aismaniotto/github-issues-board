import {
  Backdrop, CircularProgress, createStyles, makeStyles,
} from '@material-ui/core';
import React from 'react';

const Styles = makeStyles((theme) => createStyles({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },

}));

const Loader: React.FC = () => {
  const styles = Styles();

  return (
    <Backdrop className={styles.backdrop} open>
      <CircularProgress />
    </Backdrop>
  );
};
export default Loader;

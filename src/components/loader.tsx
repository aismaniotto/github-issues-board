import {
  Backdrop, CircularProgress, createStyles, makeStyles,
} from '@material-ui/core';
import React from 'react';
import { UiState } from '../store/modules/ui/types';

const Styles = makeStyles((theme) => createStyles({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },

}));

interface StateProps {
  ui: UiState,
}

type Props = StateProps;

const Loader: React.FC<Props> = (props: Props) => {
  const { ui } = props;
  const styles = Styles();

  return (
    <Backdrop className={styles.backdrop} open={ui.loading}>
      <CircularProgress />
    </Backdrop>
  );
};
export default Loader;

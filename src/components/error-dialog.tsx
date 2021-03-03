import React, { useEffect } from 'react';
import {
  Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
} from '@material-ui/core';
import { UiState } from '../store/modules/ui/types';

interface StateProps {
    ui: UiState,
}

type Props = StateProps;

const ErrorDialog: React.FC<Props> = (props: Props) => {
  const { ui } = props;
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setOpen(true);
  }, [ui.errors]);

  return (
    <Dialog
      open={open && ui.errors.length !== 0}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Something wrong</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {ui.errors.map((error) => (
            <>
              {error}
              <br />
            </>
          ))}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default ErrorDialog;

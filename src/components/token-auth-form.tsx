import {
  Button, InputAdornment, Link, TextField,
} from '@material-ui/core';
import React, { useCallback, useState } from 'react';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Style from '../styles/components/token-auth-form';
import { UiState } from '../store/modules/ui/types';
import Loader from './loader';

interface StateProps {
  ui: UiState;
}

interface DispatchProps {
  signResquest(token: string): void;
  startLoading(): void;
}

type Props = StateProps & DispatchProps;

const TokenAuthForm: React.FC<Props> = (props:Props) => {
  const classes = Style();

  const { ui, signResquest, startLoading } = props;

  const [token, setToken] = useState('');

  const handleSubmit = useCallback(async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    startLoading();
    signResquest(token);
  }, [token, signResquest, startLoading]);

  return (
    <div className={classes.root}>
      {ui.loading && <Loader />}
      <form onSubmit={handleSubmit}>
        <TextField
          className={classes.margin}
          fullWidth
          autoFocus
          required
          name="Access Token"
          label="Acess Token"
          onChange={(e) => setToken(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <VpnKeyIcon />
              </InputAdornment>
            ),
          }}
        />

        <Link
          className={classes.link}
          href="https://github.com/settings/tokens/new?scopes=repo&description=github%20issues%20board"
        >
          Get the token here
        </Link>

        <Button
          fullWidth
          className={classes.margin}
          variant="contained"
          color="primary"
          type="submit"
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default TokenAuthForm;

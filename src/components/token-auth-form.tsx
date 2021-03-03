import {
  Button, FormControl, InputAdornment, Link, TextField,
} from '@material-ui/core';
import React, { useCallback, useState } from 'react';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { Redirect } from 'react-router-dom';
import Style from '../styles/components/token-auth-form';
import { UiState } from '../store/modules/ui/types';
import LoaderContainer from '../containers/loader.container';
import { AuthState } from '../store/modules/auth/types';

interface StateProps {
  auth: AuthState;
  ui: UiState;
}

interface DispatchProps {
  signResquest(token: string): void;
}

type Props = StateProps & DispatchProps;

const TokenAuthForm: React.FC<Props> = (props:Props) => {
  const classes = Style();

  const { auth, ui, signResquest } = props;

  const [token, setToken] = useState('');

  const handleSubmit = useCallback(async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    signResquest(token);
  }, [token, signResquest]);

  if (auth.signed) {
    return <Redirect to="/select-repo" />;
  }

  return (
    <div className={classes.root}>
      <LoaderContainer />
      <form onSubmit={handleSubmit}>
        <FormControl />
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
          error={ui.errors.length > 0}
          helperText={ui.errors[0]}
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

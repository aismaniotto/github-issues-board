import {
  Button, InputAdornment, Link, TextField,
} from '@material-ui/core';
import React, { useCallback, useState } from 'react';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Style from '../styles/components/token-auth-form';

interface DispatchProps {
  signResquest(token: string): void;
}

type Props = DispatchProps;

const TokenAuthForm: React.FC<Props> = (props:Props) => {
  const classes = Style();

  const { signResquest } = props;

  const [token, setToken] = useState('');

  const handleSubmit = useCallback(async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    signResquest(token);
  }, [token, signResquest]);

  return (
    <div className={classes.root}>
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
          // onClick={handleSubmit}
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default TokenAuthForm;

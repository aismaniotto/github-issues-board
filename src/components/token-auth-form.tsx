import {
  Button, InputAdornment, Link, TextField,
} from '@material-ui/core';
import React from 'react';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Style from '../styles/components/token-auth-form';

const TokenAuthForm: React.FC = () => {
  const classes = Style();

  return (
    <div className={classes.root}>
      <form>
        <TextField
          className={classes.margin}
          fullWidth
          autoFocus
          required
          name="Access Token"
          label="Acess Token"
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

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.default,
    display: 'flex',
    alignItems: 'flexStart',
    height: '100vh',
  },
}));

export default useStyles;

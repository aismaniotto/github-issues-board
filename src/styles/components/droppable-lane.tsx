import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.secondary.main,
    padding: theme.spacing(0.25),
    margin: theme.spacing(0.5),
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'column',
  },
  lane: {
    height: '100%',
    overflow: 'auto',
  },
  title: {
    margin: theme.spacing(0.75),
  },
}));

export default useStyles;

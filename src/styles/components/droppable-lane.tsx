import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.secondary.main,
    padding: theme.spacing(0.25),
    margin: theme.spacing(0.5),
    maxHeight: '99%',
    overflow: 'auto',
    borderRadius: '4px',
  },
  title: {
    margin: theme.spacing(0.75),
  },
}));

export default useStyles;

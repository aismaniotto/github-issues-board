import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.paper,
    width: '15rem',
    margin: '5px',
    padding: '5px',
    borderRadius: '4px',
  },
  title: {},
}));

export default useStyles;

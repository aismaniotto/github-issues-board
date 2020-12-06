import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {

  },
  margin: {
    margin: theme.spacing(2),
  },
  link: {
    margin: theme.spacing(2),
  },
}));

export default useStyles;

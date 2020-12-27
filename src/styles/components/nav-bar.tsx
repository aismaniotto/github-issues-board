import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  repoName: {
    fontWeight: 'bold',
    marginRight: '0.5rem',
  },
  title: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
  },
}));

export default useStyles;

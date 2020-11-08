import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const Styles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.default,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    width: 'auto',
    padding: '1rem',
    backgroundColor: '#FFFFFF',
    borderRadius: '5px',
    boxShadow:
        '0 10px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important',
  },
}));

export default Styles;

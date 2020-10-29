import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { palette } from './palette';
import { typography } from './typography';

export default responsiveFontSizes(
  createMuiTheme({
    palette,
    typography,
  })
);

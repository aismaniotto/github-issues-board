import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import ErrorDialog from '../components/error-dialog';

function mapStateToProps(state: ApplicationState) {
  return {
    ui: state.ui,
  };
}

export default connect(mapStateToProps)(ErrorDialog);

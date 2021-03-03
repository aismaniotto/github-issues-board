import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import Loader from '../components/loader';

function mapStateToProps(state: ApplicationState) {
  return {
    ui: state.ui,
  };
}

export default connect(mapStateToProps)(Loader);

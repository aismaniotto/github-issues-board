import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import PrivateRoute from '../components/private-route';

function mapStateToProps(state: ApplicationState) {
  return {
    condition: state.auth.signed,
    failedPath: '/login',
  };
}

export default connect(mapStateToProps)(PrivateRoute);

import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import PrivateRoute from '../components/private-route';

function mapStateToProps(state: ApplicationState) {
  return {
    condition: state.auth.signed && state.repoOwner.selectedRepoOwner.login !== '' && state.repository.selectedRepository.name !== '',
    failedPath: '/select-repo',
  };
}

export default connect(mapStateToProps)(PrivateRoute);

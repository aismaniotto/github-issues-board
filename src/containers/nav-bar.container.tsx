import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import * as AuthAction from '../store/modules/auth/actions';
import { ApplicationState } from '../store';
import NavBar from '../components/nav-bar';

function mapStateToProps(state: ApplicationState) {
  return {
    repository: state.repository,
  };
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  AuthAction, dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

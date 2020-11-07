import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import * as AuthActions from '../store/modules/auth/actions';
import { ApplicationState } from '../store';
import TokenAuthForm from '../components/token-auth-form';

function mapStateToProps(state: ApplicationState) {
  return {
    auth: state.auth,
  };
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(AuthActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TokenAuthForm);

import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import * as AuthAction from '../store/modules/auth/actions';
import { ApplicationState } from '../store';
import TokenAuthForm from '../components/token-auth-form';

function mapStateToProps(state: ApplicationState) {
  return {
    auth: state.auth,
    ui: state.ui,
  };
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(AuthAction, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TokenAuthForm);

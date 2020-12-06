import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import * as RepoOwnerAction from '../store/modules/repoOwner/actions';
import * as RepositoryAction from '../store/modules/repository/actions';
import { ApplicationState } from '../store';
import SelectRepoPage from '../pages/select-repo-page';

function mapStateToProps(state: ApplicationState) {
  return {
    ui: state.ui,
    repoOwner: state.repoOwner,
    repository: state.repository,
  };
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    ...RepoOwnerAction,
    ...RepositoryAction,
  }, dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(SelectRepoPage);

import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import * as LabelActions from '../store/modules/label/actions';
import * as IssueActions from '../store/modules/issue/actions';
import { ApplicationState } from '../store';
import Board from '../components/board';

function mapStateToProps(state: ApplicationState) {
  return {
    label: state.label,
    issue: state.issue,
    ui: state.ui,
  };
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    ...LabelActions,
    ...IssueActions,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(Board);

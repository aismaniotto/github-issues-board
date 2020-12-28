import React, { useEffect } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import DroppableLane from './droppable-lane';
import Style from '../styles/components/board';
import { LabelState } from '../store/modules/label/types';
import { Issue, IssueState } from '../store/modules/issue/types';
import findIssueByNumber from '../helpers/find-issue-by-number';
import removeAllLanes from '../helpers/remove-all-lanes';
import findIssuesWithNoLanes from '../helpers/find-issues-with-no-lanes';
import findIssuesByLane from '../helpers/find-issues-by-lane';
import findClosedIssues from '../helpers/find-closed-issues';
import { UiState } from '../store/modules/ui/types';
import Loader from './loader';

interface StateProps {
  ui: UiState
  issue: IssueState;
  label: LabelState;
}

interface DispatchProps {
  updateIssueRequest(issue: Issue): void;
  closeIssueRequest(issue: Issue): void;
  getIssuesRequest(): void;
  getLabelsRequest(): void;
}

type Props = StateProps & DispatchProps;

const Board: React.FC<Props> = (props: Props) => {
  const classes = Style();
  const {
    ui,
    issue,
    label,
    updateIssueRequest,
    closeIssueRequest,
    getIssuesRequest,
    getLabelsRequest,
  } = props;

  useEffect(() => {
    getLabelsRequest();
    getIssuesRequest();
  }, [getIssuesRequest, getLabelsRequest]);

  const onDragEnd = (result: DropResult) => {
    const { destination, draggableId } = result;

    if (!destination) {
      return;
    }

    const findedIssue = findIssueByNumber(issue.issues, draggableId);
    const destinationLabel = label.allLabels.find(
      (destinationLane) => destinationLane.name === destination.droppableId,
    );

    if (findedIssue === undefined) return;

    if (destination.droppableId === 'closed') {
      closeIssueRequest(findedIssue);
    } else if (destination.droppableId === 'no-lane') {
      updateIssueRequest(removeAllLanes(findedIssue, label.lanes));
    } else if (destinationLabel !== undefined) {
      const issueWithouLanes = removeAllLanes(findedIssue, label.lanes);

      const issueUpdated = {
        ...issueWithouLanes,
        labels: [
          ...issueWithouLanes.labels ?? [],
          destinationLabel,
        ],
      };

      if(findedIssue.closed_at){
        // Reopen Issue
        const issueUpdatedReopen= {
          ...issueWithouLanes,
          labels: [
            ...issueWithouLanes.labels ?? [],
            destinationLabel,
          ],
          state: 'open',
          closed_at: null
        }
        console.log(issueUpdatedReopen);
        updateIssueRequest(issueUpdatedReopen);
      }else{
        updateIssueRequest(issueUpdated);
      }
    }
  };

  return (
    <div className={classes.root}>
      {ui.loading && <Loader />}
      <DragDropContext onDragEnd={onDragEnd}>
        <DroppableLane
          name="no-lane"
          items={findIssuesWithNoLanes(issue.issues, label.lanes)}
        />
        {label.lanes.map((lane) => (
          <DroppableLane
            key={lane}
            name={lane}
            items={findIssuesByLane(issue.issues, lane)}
          />
        ))}
        <DroppableLane
          name="closed"
          items={findClosedIssues(issue.issues)}
        />
      </DragDropContext>
    </div>
  );
};

export default Board;

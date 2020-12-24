import React, { useEffect } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import DroppableLane from './droppable-lane';
import Style from '../styles/components/board';
import { LabelState } from '../store/modules/label/types';
import { Issue, IssueState } from '../store/modules/issue/types';

interface StateProps {
  issue: IssueState;
  label: LabelState;
}

interface DispatchProps {
  updateIssueRequest(issue: Issue): void;
  getIssuesRequest(): void;
  getLabelsRequest(): void;
}

type Props = StateProps & DispatchProps;

const Board: React.FC<Props> = (props: Props) => {
  const classes = Style();
  const {
    issue,
    label,
    updateIssueRequest,
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

    const findedIssue = issue.issues.find((target) => target.number.toString() === draggableId);
    const destinationLabel = label.allLabels.find(
      (destinationLane) => destinationLane.name === destination.droppableId,
    );

    if (findedIssue === undefined || destinationLabel === undefined) return;

    const issueTarget: Issue = findedIssue;
    const issueWithouLanes:Issue = {
      ...issueTarget,
      labels: issueTarget?.labels?.filter(
        (removeLabels) => !label.lanes.includes(removeLabels.name),
      ),
    };

    const issueUpdated:Issue = {
      ...issueWithouLanes,
      labels: [
        ...issueWithouLanes.labels ?? [],
        destinationLabel,
      ],
    };

    updateIssueRequest(issueUpdated);
  };
  return (
    <div className={classes.root}>
      <DragDropContext onDragEnd={onDragEnd}>
        {label.lanes.map((lane) => (
          <DroppableLane
            name={lane}
            items={
              issue.issues.filter(
                (issue2) => issue2.labels?.findIndex((label2) => lane === label2.name) !== -1,
              )
            }
          />
        ))}
      </DragDropContext>
    </div>
  );
};

export default Board;

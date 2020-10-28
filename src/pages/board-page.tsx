import React, { useEffect } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import Lane from '../components/lane';
import Style from '../styles/pages/board-page';
import generateMockItems from '../services/generate-mock-items';
import { BoardState, Issue } from '../store/modules/board/types';

interface StateProps {
  board: BoardState;
}

interface DispatchProps {
  getIssuesSuccess(issues: Issue[]): void;
  updateIssue(issue: Issue): void;
}

type Props = StateProps & DispatchProps;

const BoardPage: React.FC<Props> = (props: Props) => {
  const classes = Style();
  const { board, getIssuesSuccess, updateIssue } = props;

  useEffect(() => {
    getIssuesSuccess([
      ...generateMockItems('predev', 'predev', 5, 0),
      ...generateMockItems('backlog', 'backlog', 10, 5),
      ...generateMockItems('todo', 'todo', 10, 15),
      ...generateMockItems('doing', 'doing', 15, 25),
      ...generateMockItems('done', 'done', 10, 40),
    ]);
  }, [getIssuesSuccess]);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    const laneOrigin = board.lanes.find(
      (lane) => lane.name === source.droppableId,
    );
    const issueTarget = laneOrigin?.issues[source.index];
    if (!issueTarget) return;
    const issueUpdated = { ...issueTarget, lane: destination.droppableId };

    updateIssue(issueUpdated);
  };

  return (
    <div className={classes.root}>
      <DragDropContext onDragEnd={onDragEnd}>
        {board.lanes.map((lane) => (
          <Lane id={lane.name} items={lane.issues} />
        ))}
      </DragDropContext>
    </div>
  );
};

export default BoardPage;

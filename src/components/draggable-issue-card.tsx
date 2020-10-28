import { Typography } from '@material-ui/core';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Issue } from '../store/modules/board/types';
import Style from '../styles/components/draggable-issue-card';

interface Props {
  issue: Issue,
  index: number
}

const DraggableIssueCard: React.FC<Props> = (props: Props) => {
  const { issue, index } = props;
  const classes = Style();
  return (
    <Draggable key={issue.id} draggableId={`${issue.id}`} index={index}>
      {(provided) => (
        <div
          className={classes.root}
          ref={provided.innerRef}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...provided.draggableProps}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...provided.dragHandleProps}
        >
          <Typography variant="body2" className={classes.title}>
            {issue.title}
          </Typography>
        </div>
      )}
    </Draggable>
  );
};

export default DraggableIssueCard;

import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import Style from '../styles/components/issue-card';

interface Props {
  id: string;
  index: number;
  title: string;
}

const IssueCard: React.FC<Props> = (props: Props) => {
  const { id, title, index } = props;
  const classes = Style();
  return (
    <Draggable key={id} draggableId={`${id}`} index={index}>
      {(provided, snapshot) => (
        <div
          className={classes.root}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {title}
        </div>
      )}
    </Draggable>
  );
};

export default IssueCard;

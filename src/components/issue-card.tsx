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
      {(provided) => (
        <div
          className={classes.root}
          ref={provided.innerRef}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...provided.draggableProps}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...provided.dragHandleProps}
        >
          {title}
        </div>
      )}
    </Draggable>
  );
};

export default IssueCard;

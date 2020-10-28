import { Typography } from '@material-ui/core';
import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Issue } from '../store/modules/board/types';
import Style from '../styles/components/droppable-lane';
import DraggableIssueCard from './draggable-issue-card';

interface Props {
  name: string;
  items: Issue[];
}

const DroppableLane: React.FC<Props> = (props: Props) => {
  const { name, items } = props;
  const classes = Style();

  return (
    <Droppable droppableId={name}>
      {(provided) => (
        <div
          className={classes.root}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <Typography variant="subtitle2" className={classes.title}>
            {name}
          </Typography>
          {items.map((item, index) => (
            <DraggableIssueCard
              issue={item}
              index={index}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default DroppableLane;

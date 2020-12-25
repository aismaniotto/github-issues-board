import { Typography } from '@material-ui/core';
import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Issue } from '../store/modules/issue/types';
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
    <div className={classes.root}>
      <Typography variant="subtitle2" className={classes.title}>
        {name.substring(name.lastIndexOf(':') + 1)}
      </Typography>
      <Droppable droppableId={name}>
        {(provided) => (
          <div
          // eslint-disable-next-line react/jsx-props-no-spreading
            {...provided.droppableProps}
            className={classes.lane}
            ref={provided.innerRef}
          >
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
    </div>
  );
};

export default DroppableLane;

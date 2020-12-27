import { Typography } from '@material-ui/core';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Issue } from '../store/modules/issue/types';
import Style from '../styles/components/draggable-issue-card';
import Tag from './tag';

interface Props {
  issue: Issue,
  index: number
}

const DraggableIssueCard: React.FC<Props> = (props: Props) => {
  const { issue, index } = props;
  const classes = Style();
  return (
    <Draggable key={issue.number} draggableId={`${issue.number}`} index={index}>
      {(provided) => (
        <div
          className={classes.root}
          ref={provided.innerRef}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...provided.draggableProps}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...provided.dragHandleProps}
        >
          <Typography variant="body1" className={classes.title}>
            <b>
              #
              {issue.number}
            </b>
            {' '}
            {issue.title}
          </Typography>
          <hr />
          {issue.labels?.map(
            (label) => (!label.name.match(/^(_lane):[\d]+:.+/g) ? <Tag label={label.name} key={label.name} color={label.color} /> : null),
          )}
        </div>
      )}
    </Draggable>
  );
};

export default DraggableIssueCard;

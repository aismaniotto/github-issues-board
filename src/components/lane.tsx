import React from "react";
import { Droppable } from "react-beautiful-dnd";
import Style from "./../styles/components/lane";
import IssueCard from "./issue-card";

interface Props {
  id: string;
  items: any[];
}

const Lane: React.FC<Props> = (props: Props) => {
  const { id, items } = props;
  const classes = Style();

  return (
    <Droppable droppableId={id}>
      {(provided, snapshot) => (
        <div
          className={classes.root}
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {items.map((item, index) => (
            <IssueCard
              id={item.id}
              key={item.id}
              index={item.index}
              title={item.title}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Lane;

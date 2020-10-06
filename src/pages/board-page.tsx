import React, { useState } from "react";
import {
  DragDropContext,
  DropResult,
  ResponderProvided,
} from "react-beautiful-dnd";
import Lane from "../components/lane";
import Style from "../styles/pages/board-page";

const BoardPage: React.FC = () => {
  const classes = Style();

  const [items, setItems] = useState([
    { id: "id1", index: 1, title: "name1" },
    { id: "id2", index: 2, title: "name2" },
    { id: "id3", index: 3, title: "name3" },
    { id: "id4", index: 4, title: "name4" },
    { id: "id5", index: 5, title: "name5" },
    { id: "id6", index: 6, title: "name6" },
    { id: "id7", index: 7, title: "name7" },
    { id: "id8", index: 8, title: "name8" },
  ]);

  const reorder = (list: any[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result: DropResult, provided: ResponderProvided) => {
    if (!result.destination) {
      return;
    }

    const localItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );

    setItems(localItems);
  };

  return (
    <div className={classes.root}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Lane id="firstLane" items={items} />
      </DragDropContext>
    </div>
  );
};

export default BoardPage;

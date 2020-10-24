import React, { useState } from "react";
import {
  DragDropContext,
  DraggableLocation,
  DropResult,
  ResponderProvided,
} from "react-beautiful-dnd";
import Lane from "../components/lane";
import Style from "../styles/pages/board-page";
import generateMockItems from "../services/generate-mock-items";

const BoardPage: React.FC = () => {
  const classes = Style();

  const [itemsLane1, setItems1] = useState(generateMockItems('issue1', 10));
  const [itemsLane2, setItems2] = useState(generateMockItems('issue2', 10));

  const reorder = (list: any[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const move = (source:any[], destination:any[], droppableSource: DraggableLocation, droppableDestination: DraggableLocation) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result: {[k: string]: any} = {};

    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
  };

  const onDragEnd = (result: DropResult, provided: ResponderProvided) => {
    const { source, destination } = result;
    
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      if (source.droppableId === 'lane1') {
        const localItems = reorder(
          itemsLane1,
          source.index,
          destination.index
        );
        setItems1(localItems);
        
      } else {
        const localItems = reorder(
          itemsLane2,
          source.index,
          destination.index
        );
        setItems2(localItems);
      }
    } else {
      const result = move(
        source.droppableId === 'lane1' ? itemsLane1 : itemsLane2,
        destination.droppableId === 'lane1' ? itemsLane1 : itemsLane2,
        source,
        destination
      );
      setItems1(result.lane1);
      setItems2(result.lane2);
    }
  };

  return (
    <div className={classes.root}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Lane id="lane1" items={itemsLane1} />
        <Lane id="lane2" items={itemsLane2} />
      </DragDropContext>
    </div>
  );
};

export default BoardPage;

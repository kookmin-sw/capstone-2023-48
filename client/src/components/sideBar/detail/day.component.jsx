import './day.style.scss';
import React from "react";
import Task from "./task";
import { Droppable, Draggable } from "react-beautiful-dnd";


const Day = (props) => {
  
  const {places, day, index } = props;


  return(
    <Draggable draggableId={day.id} index={index} type="column">
      {provided => (
        <div
          className='plan-day'
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div>{day.date}</div>
          <Droppable droppableId={day.id} type="task">
            {(provided, snapshot) => (
              <div
                isDraggingOver={snapshot.isDraggingOver}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {console.log("places",places)}
                {places.map((place, index) => (
                  <Task key={place} task={place} index={index} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  )
}

export default Day;


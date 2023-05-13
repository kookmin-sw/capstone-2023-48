import { Draggable } from "react-beautiful-dnd";
import './task.style.scss'
// const Container = styled("div")`
//   border: 1px solid lightgrey;
//   margin-bottom: 8px;
//   border-radius: 2px;
//   padding: 8px;
//   background: ${props => (props.isDragging ? "lightgreen" : "white")};
// `;

const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index} type="task">
      {(provided, snapshot) => (
        <div
          className="plan-task"
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          isDragging={snapshot.isDragging}
        >
          안녕111{index}
          {console.log('task',task)}
          {console.log('title',task.place_title)}
          {task.place_title}
          {task.formatted_address}
          {task.startAt}
          {task.endAt}
        </div>
      )}
    </Draggable>
  );
};

export default Task;

import * as React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Wrapper, Title, TaskList } from "./styled/elements";
import Task from "./Task";

interface Props {
  column: Column;
  tasks: Task[];
}

const Column: React.FC<Props> = ({ column, tasks }) => {
  return (
    <Wrapper>
      <Title> {column.title} </Title>
      <Droppable
        droppableId={column.id}
        // Will only be able to drop into the 2 first columns
        // type={column.id === "column-3" ? "done" : "active"}
      >
        {(provided, snapshot) => (
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}>
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Wrapper>
  );
};
export default Column;

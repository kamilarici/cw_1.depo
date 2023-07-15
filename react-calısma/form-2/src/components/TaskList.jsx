import React from "react";
import TaskShow from "./TaskShow";

const TaskList = ({ tasks }) => {
  return (
    <div className="task-list">
      {tasks.map((task, i) => {
        return <TaskShow key={i} task={task} />;
      })}
    </div>
  );
};

export default TaskList;

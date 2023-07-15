import React from "react";

const TaskShow = ({ task }) => {
  console.log(task);
  return (
    <div>
      <h3>Göreviniz</h3>
      <p>{task.title}</p>
      <h3>Yapılacaklar</h3>
      <p>{task.taskDesc}</p>
    </div>
  );
};

export default TaskShow;

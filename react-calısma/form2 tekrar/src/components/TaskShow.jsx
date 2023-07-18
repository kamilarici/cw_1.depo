import React, { useState } from "react";
import TaskCreate from "./TaskCreate";

const TaskShow = ({ task, onDelete, onUpdate }) => {
  const [showEdit, setShowEdit] = useState(false);
  console.log(task);
  const handleDeleteClick = () => {
    onDelete(task.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = (id, updatedTitle, updatedTaskDesc) => {
    setShowEdit(false);
    onUpdate(id, updatedTitle, updatedTaskDesc);
  };

  return (
    <div className="task-show">
      {showEdit ? (
        <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit} />
      ) : (
        <>
          <h3 className="task-title">Göreviniz </h3>
          <p>{task.title}</p>
          <h3 className="task-title">yapılacaklar</h3>
          <p>{task.taskDesc}</p>
          <div>
            <button className="task-delete" onClick={handleDeleteClick}>
              sil
            </button>
            <button onClick={handleEditClick} className="task-edit">
              güncelle
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskShow;

import React, { useState } from "react";

const TaskCreate = ({ onCreate, task, taskFormUpdate, onUpdate }) => {
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleTaskChange = (e) => {
    setTaskDesc(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskFormUpdate) {
      onUpdate(task.id, title, taskDesc);
    } else {
      onCreate(title, taskDesc);
    }

    setTitle("");
    setTaskDesc("");
  };
  return (
    <div>
      {taskFormUpdate ? (
        <div className="task-update">
          <h3>lütfen taskı düzenleyiniz</h3>
          <form className="task-form">
            <label className="task-label">başlığı düzenleyiniz</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">taskı düzenleyiniz</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-input"
              rows={5}
            />

            <button
              onClick={handleSubmit}
              className="task-button update-button"
            >
              düzenle
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>lütfen task ekleyiniz</h3>
          <form className="task-form">
            <label className="task-label">başlık</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">task giriniz</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-input"
              rows={5}
            />

            <button onClick={handleSubmit} className="task-button">
              oluştur
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default TaskCreate;

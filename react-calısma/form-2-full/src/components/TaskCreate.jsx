import { useState } from "react";

const TaskCreate = ({ onCreate, task, taskformUpdate, onUpdate }) => {
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, setTaskDesk] = useState(task ? task.taskDesc : "");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleTaskChange = (e) => {
    setTaskDesk(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskformUpdate) {
      onUpdate(task.id, title, taskDesc);
    } else {
      onCreate(title, taskDesc);
    }

    setTitle("");
    setTaskDesk("");
  };

  return (
    <div>
      {" "}
      {taskformUpdate ? (
        <div className="task-update">
          <h3>Lütfen taskı düzenleyiniz</h3>
          <form className="task-form">
            <label className="task-label">başlığı düzenleyiniz</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
              type="text"
            />
            <label className="task-label">Taskı düzenleyiniz</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-input"
              rows={5}
            />
            <button
              className="task-button update-button"
              onClick={handleSubmit}
            >
              Düzenle
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Lütfen task ekleyiniz</h3>
          <form className="task-form">
            <label className="task-label">başlık</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
              type="text"
            />
            <label className="task-label">Task giriniz</label>
            <textarea
              value={taskDesc}
              onChange={handleTaskChange}
              className="task-input"
              rows={5}
            />
            <button className="task-button" onClick={handleSubmit}>
              Oluştur
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default TaskCreate;

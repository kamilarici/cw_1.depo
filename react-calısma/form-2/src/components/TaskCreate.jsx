import { useState } from "react";

const TaskCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");
  const [taskDesc, setTaskDesk] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleTaskChange = (e) => {
    setTaskDesk(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title, taskDesc);
    setTitle("");
    setTaskDesk("");
  };

  return (
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
  );
};

export default TaskCreate;

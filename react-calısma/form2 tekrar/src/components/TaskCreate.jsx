import React, { useState } from "react";

const TaskCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleTaskChange = (e) => {
    setTaskDesc(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title, taskDesc);
    setTitle("");
    setTaskDesc("");
  };
  return (
    <div className="task-create">
      <h3>lütfen task ekleyiniz</h3>
      <form className="task-form">
        <label className="task-label">başlık</label>
        <input value={title} onChange={handleChange} className="task-input" />
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
  );
};

export default TaskCreate;

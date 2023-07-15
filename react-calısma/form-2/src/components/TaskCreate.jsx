import React from "react";

const TaskCreate = () => {
  return (
    <div className="task-create">
      <h3>Lütfen task ekleyiniz</h3>
      <form className="task-form">
        <label className="task-label">başlık</label>
        <input className="task-input" type="text" />
        <label className="task-label">Task giriniz</label>
        <textarea className="task-input" />
        <button className="task-button">Oluştur</button>
      </form>
    </div>
  );
};

export default TaskCreate;

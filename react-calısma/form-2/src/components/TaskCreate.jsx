import React from "react";

const TaskCreate = () => {
  return (
    <div>
      <h3>Lütfen task ekleyiniz</h3>
      <form className="task-form">
        <label>başlık</label>
        <input type="text" />
        <label>Task giriniz</label>
        <textarea />
        <button>Oluştur</button>
      </form>
    </div>
  );
};

export default TaskCreate;

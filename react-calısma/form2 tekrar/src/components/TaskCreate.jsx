import React from "react";

const TaskCreate = () => {
  const [title, setTitle] = useState(second);
  return (
    <div className="task-create">
      <h3>lütfen task ekleyiniz</h3>
      <form className="task-form">
        <label className="task-label">başlık</label>
        <input className="task-input" />
        <label className="task-label">task giriniz</label>
        <textarea className="task-input" rows={5} />
        <button className="task-button">oluştur</button>
      </form>
    </div>
  );
};

export default TaskCreate;

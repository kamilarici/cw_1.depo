import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = async (title, taskDesc) => {
    const response = await axios.post("http://localhost:3000/tasks", {
      title,
      taskDesc,
    });
    console.log(response);
    const createdTasks = [
      ...tasks,
      response.data,
      // {

      //   id: Math.round(Math.random() * 99999),
      //   title: title,
      //   taskDesc: taskDesc,
      // },
    ];
    setTasks(createdTasks);
  };
  const deleteTaskById = (id) => {
    const afterDeletetingTask = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletetingTask);
  };
  const editTaskById = (id, updatedTitle, updatedTaskDesc) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id, title: updatedTitle, taskDesc: updatedTaskDesc };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList
        tasks={tasks}
        onDelete={deleteTaskById}
        onUpdate={editTaskById}
      />
    </div>
  );
}

export default App;

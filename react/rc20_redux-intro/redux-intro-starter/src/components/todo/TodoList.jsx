import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const handleClearList = () => {
    const todoList = useSelector((state) => state.todo.todoList);

    dispatch(clearTodo());
  };

  return (
    <div>
      <div>
        {todoList?.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
      <div className="clear-wrapper">
        <button onClick={handleClearList} className="clear-button">
          Clear
        </button>
      </div>
    </div>
  );
};

export default TodoList;

import { createContext } from "react";

const TasksContext = createContext();

export function Provider({ children }) {
  return <TasksContext.Provider>{children}</TasksContext.Provider>;
}

export { Provider };
export default TasksContext;

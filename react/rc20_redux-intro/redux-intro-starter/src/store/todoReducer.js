export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const CLEAR_TODO = "CLEAR_TODO";

export const addTodo = (payload) => ({ type: ADD_TODO, payload });
export const clearTodo = () => ({ type: CLEAR_TODO });
export const deleteTodo = (payload) => ({ type: DELETE_TODO, payload });
export const toogleTodo = (payload) => ({ type: TOGGLE_TODO, payload });

const initialState = {
  todoList: [{ id: new Date().getTime(), text: "work redux", completed: true }],
};

export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      //? obje array içine  obje atılacak
      return {
        todoList: [
          ...state.todoList,
          { id: new Date().getTime(), text: payload, completed: false },
        ],
      };
    case CLEAR_TODO:
      //? obje array içine  obje atılacak
      return initialState;
    case DELETE_TODO:
      return {
        todoList: [...state.todoList.filter((item) => item.id !== payload)],
      };
    case TOGGLE_TODO:
      return {
        todoList: [
          ...state.todoList.map((item) =>
            item.id == payload ? { ...item, completed: !item.completed } : item
          ),
        ],
      };

    default:
      return state;
  }
};

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const CLEAR_TODO = "CLEAR_TODO";

export const addTodo = (payload) => ({ type: ADD_TODO, payload });
export const clearTodo = () => ({ type: CLEAR_TODO });

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
          { id: new Date().getTime(), text: payload, conmpleted: false },
        ],
      };
    case CLEAR_TODO:
      //? obje array içine  obje atılacak
      return initialState;

    default:
      return state;
  }
};

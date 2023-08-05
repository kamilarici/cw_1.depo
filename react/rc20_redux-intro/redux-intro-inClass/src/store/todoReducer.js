//? todoReducer type declaration
export const ADD_TODO = "ADD_TODO"
export const DELETE_TODO = "DELETE_TODO"
export const TOGGLE_TODO = "TOGGLE_TODO"
export const CLEAR_TODO = "CLEAR_TODO"

//? action function declartion
export const addTodo = (payload) => ({ type: ADD_TODO, payload })
export const clearTodo = () => ({ type: CLEAR_TODO })

//? baslangic durumlari
const initialState = {
  todoList: [{ id: new Date().getTime(), text: "work redux", completed: true }],
}

export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        todoList: [
          ...state.todoList,
          { id: new Date().getTime(), text: payload, completed: false },
        ],
      }

    case CLEAR_TODO:
      return initialState

    //TODO
    case DELETE_TODO:
      return initialState

    //TODO
    case TOGGLE_TODO:
      return initialState

    default:
      return state
  }
}

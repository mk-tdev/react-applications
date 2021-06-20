const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = action.payload;
      return { ...state, todos: [newTodo, ...state.todos] };
    case "REMOVE_TODO":
      const todos = state.todos.filter((todo) => todo.id !== action.payload);
      return { ...state, todos: todos };
    case "EDIT_TODO":
      const updatedTodo = action.payload;
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === updatedTodo.id) {
          return updatedTodo;
        }
        return todo;
      });
      return { ...state, todos: updatedTodos };

    default:
      return state;
  }
};

export default AppReducer;

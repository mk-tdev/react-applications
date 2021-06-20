import React, { createContext, useReducer } from "react";

import AppReducer from "./AppReducer";

// Initial state
const initialState = {
  todos: [
    { id: 1, what: "Finish this app" },
    { id: 2, what: "Publish this app" },
  ],
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const removeTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };

  const addTodo = (id, what) => {
    dispatch({ type: "ADD_TODO", payload: { id, what } });
  };

  const editTodo = (id, what) => {
    dispatch({ type: "EDIT_TODO", payload: { id, what } });
  };

  return (
    <GlobalContext.Provider
      value={{ todos: state.todos, removeTodo, addTodo, editTodo }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

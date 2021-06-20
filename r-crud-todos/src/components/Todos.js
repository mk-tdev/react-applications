import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import { GlobalContext } from "../contexts/GlobalState";

const Todos = () => {
  const { todos, removeTodo } = useContext(GlobalContext);

  return (
    <div className="w-100 d-flex flex-column">
      {todos.length === 0 && <h3>No Todos found :( Try adding one!</h3>}

      {todos.map((todo) => {
        return (
          <div
            key={todo.id}
            className="todo-item d-flex justify-content-between align-content-center align-items-center w-100 my-2"
          >
            <div className="text-white">{todo.what}</div>
            <div>
              <Link to={`/edit-todo/${todo.id}`} className="btn btn-warning">
                Edit
              </Link>

              <Button
                variant="danger"
                type="submit"
                onClick={() => removeTodo(todo.id)}
              >
                Delete
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;

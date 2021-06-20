import React, { useContext, useState, useEffect, useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { GlobalContext } from "../contexts/GlobalState";
import { Link, useHistory } from "react-router-dom";

const EditTodo = (props) => {
  const history = useHistory();
  const { todos, editTodo } = useContext(GlobalContext);
  const [what, setWhat] = useState("");
  const todoElem = useRef(null);
  const currentTodoID = props.match.params.id;

  useEffect(() => {
    todoElem.current.focus();
    const todoId = currentTodoID;
    const selectedTodo = todos.find((t) => t.id === todoId);
    setWhat(selectedTodo.what);
  }, [currentTodoID, todos]);

  const onEdit = () => {
    editTodo(currentTodoID, what);
    history.push("/");
  };

  return (
    <div style={{ maxWidth: "60%", width: "100%" }}>
      <Form>
        <Form.Group>
          <Form.Label>Editing it: </Form.Label>
          <Form.Control
            type="text"
            ref={todoElem}
            value={what}
            onChange={({ target }) => setWhat(target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={onEdit}>
          Update
        </Button>

        <Link className="ml-2 btn btn-warning" to="/">
          Cancel
        </Link>
      </Form>
    </div>
  );
};

export default EditTodo;

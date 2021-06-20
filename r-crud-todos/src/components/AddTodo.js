import React, { useContext, useState, useEffect, useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { GlobalContext } from "../contexts/GlobalState";

const AddTodo = () => {
  const history = useHistory();
  const { addTodo } = useContext(GlobalContext);
  const [what, setWhat] = useState("");
  const todoElem = useRef(null);

  useEffect(() => {
    todoElem.current.focus();
  }, []);

  const onAddition = () => {
    addTodo(uuidv4(), what);
    history.push("/");
  };

  return (
    <div style={{ maxWidth: "60%", width: "100%" }}>
      <Form>
        <Form.Group>
          <Form.Label>What is it?</Form.Label>
          <Form.Control
            type="text"
            ref={todoElem}
            placeholder="Enter todo item"
            value={what}
            onChange={({ target }) => setWhat(target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={onAddition}>
          Add
        </Button>

        <Link className="ml-2 btn btn-warning" to="/">
          Cancel
        </Link>
      </Form>
    </div>
  );
};

export default AddTodo;

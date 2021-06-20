import React from "react";

import { Link } from "react-router-dom";

const Heading = () => {
  return (
    <div className="mb-2 p-2" style={{ backgroundColor: "darkslategray" }}>
      <h2>Todos - React - Routes (Context API)</h2>

      <div className="d-flex justify-content-center">
        <div className="mx-2">
          <Link to="/" className="btn btn-primary text-white">
            Todos
          </Link>
        </div>
        <div className="mx-2">
          <Link to="/add-todo" className="btn btn-info text-white">
            Add Todo
          </Link>
        </div>
        {/* <div className="mx-2">
          <Link to="/edit-todo" className="text-white">
            Edit Todo
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Heading;

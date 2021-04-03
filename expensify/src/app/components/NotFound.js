import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h2>Not Found 404!</h2>

      <Link to="/">Go Home</Link>
    </div>
  );
}

export default NotFound;

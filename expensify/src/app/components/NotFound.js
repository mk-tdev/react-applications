import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <h2>Not Found 404!</h2>

      <Link to="/">Go Home</Link>
    </div>
  );
}

export default NotFound;

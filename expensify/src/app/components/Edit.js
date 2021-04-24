import React from "react";
import { useParams } from "react-router";

const Edit = (props) => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <h2>Edit</h2>
    </div>
  );
};

export default Edit;

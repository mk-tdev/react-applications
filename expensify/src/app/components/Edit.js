import React from "react";
import { useParams } from "react-router";

const Edit = (props) => {
  const { id } = useParams();
  console.log(id);

  return <div>Edit</div>;
};

export default Edit;

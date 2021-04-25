import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => {
  return (
    <div>
      <h1>Info</h1>

      <p>
        The Info is <b>{props.info}</b>
      </p>
    </div>
  );
};

const withAdminMessage = (WrappedComponent) => {
  return (props) => {
    return (
      <div>
        <p>Some Admin Information!</p>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

const AdminInfo = withAdminMessage(Info);

ReactDOM.render(
  <AdminInfo info="Higher Order Component" />,
  document.getElementById("root")
);

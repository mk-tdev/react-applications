import React from "react";

const ActionButton = ({ hasOptions, handlePick, label }) => {
  return (
    <>
      <button disabled={!hasOptions} onClick={handlePick}>
        {label}
      </button>
    </>
  );
};

export default ActionButton;

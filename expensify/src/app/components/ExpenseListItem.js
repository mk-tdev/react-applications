import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";

const ExpenseListItem = ({ description, amount, createdAt, id, dispatch }) => {
  return (
    <div>
      <h4>{description}</h4>
      <h5>
        {amount} - {createdAt}
      </h5>

      <button
        onClick={() => {
          dispatch(removeExpense({ id }));
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default connect()(ExpenseListItem);

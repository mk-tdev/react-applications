import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";

const ExpenseListItem = ({ description, amount, createdAt, id, dispatch }) => {
  return (
    <div className="expense-item">
      <div>
        <h4>{description}</h4>
        <p>
          ${amount} - (at: {createdAt})
        </p>
      </div>
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

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";

import { removeExpense } from "../actions/expenses";

const ExpenseListItem = ({ description, amount, createdAt, id, dispatch }) => {
  // console.log("moment", moment(createdAt).date());

  return (
    <div className="expense-item">
      <div>
        <Link to={`/edit/${id}`}>
          <h4>{description}</h4>
        </Link>
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

import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import ExpenseForm from "./ExpenseForm";
import { initAddExpense } from "../actions/expenses";

function AddExpense(props) {
  const history = useHistory();

  return (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm
        onSubmit={(expense) => {
          props.initAddExpense(expense);
          history.push("/");
        }}
      />
    </div>
  );
}

const mapDispatchToPros = (dispatch) => ({
  initAddExpense: (expense) => dispatch(initAddExpense(expense)),
});

export default connect(undefined, mapDispatchToPros)(AddExpense);

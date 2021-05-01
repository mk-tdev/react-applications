import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import ExpenseForm from "./ExpenseForm";
import { editExpense } from "../actions/expenses";

const Edit = (props) => {
  const history = useHistory();

  return (
    <div>
      <h2>Edit</h2>

      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          console.log("expense: ", expense);
          props.dispatch(editExpense(props.expense.id, expense));
          history.push("/");
        }}
      />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((exp) => exp.id === props.match.params.id),
  };
};

export default connect(mapStateToProps)(Edit);

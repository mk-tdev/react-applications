import React from "react";
import { connect } from "react-redux";
// import { useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";

import ExpenseForm from "./ExpenseForm";
import { initAddExpense } from "../actions/expenses";

export class AddExpense extends React.Component {
  onSubmit = (expense) => {
    this.props.initAddExpense(expense);
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToPros = (dispatch) => ({
  initAddExpense: (expense) => dispatch(initAddExpense(expense)),
});

export default withRouter(connect(undefined, mapDispatchToPros)(AddExpense));

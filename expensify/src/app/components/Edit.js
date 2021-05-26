import React from "react";
import { connect } from "react-redux";
// import { useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";
import ExpenseForm from "./ExpenseForm";
import {
  editExpense,
  startRemoveExpenses,
  startEditExpenses,
} from "../actions/expenses";

export class Edit extends React.Component {
  onSubmit = (expense) => {
    this.props.startEditExpenses(this.props.expense.id, expense);
    this.props.history.push("/");
  };

  onRemove = () => {
    this.props.startRemoveExpenses({ id: this.props.expense.id });
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <h2>Edit</h2>

        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />

        <div>
          <button onClick={this.onRemove}>Remove This Expense</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((exp) => exp.id === props.match.params.id),
  };
};

const mapDispatchToPros = (dispatch, props) => ({
  startEditExpenses: (id, expense) => dispatch(startEditExpenses(id, expense)),
  startRemoveExpenses: (id) => dispatch(startRemoveExpenses(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(Edit));

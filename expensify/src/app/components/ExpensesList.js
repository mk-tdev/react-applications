import React from "react";

import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

export const ExpensesList = (props) => {
  return (
    <div>
      {props.expenses.length === 0 ? (
        <p>No Expenses Found!</p>
      ) : (
        props.expenses.map((exp) => <ExpenseListItem key={exp.id} {...exp} />)
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpensesList);

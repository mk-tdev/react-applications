import React from "react";

import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

function ExpensesList(props) {
  return (
    <div>
      {props.expenses.map((exp) => {
        return <ExpenseListItem key={exp.id} {...exp} />;
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpensesList);

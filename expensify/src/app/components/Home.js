import React from "react";
import { NavLink } from "react-router-dom";
import ConnectedExpensesList from "./ExpensesList";
import ExpensesListFilter from "./ExpensesListFilter";

const Home = () => {
  return (
    <div>
      <h2>Expenses List</h2>
      <ExpensesListFilter />
      <ConnectedExpensesList />

      <NavLink to="/edit/2" activeClassName="is-active" exact>
        Help
      </NavLink>
    </div>
  );
};

export default Home;

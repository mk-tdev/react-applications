import database from "../../firebase/firebase";

// ADD_EXPENSE
export const addExpense = (expense = {}) => {
  return {
    type: "ADD_EXPENSE",
    expense,
  };
};

export const initAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0,
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    return database
      .ref("expenses")
      .push(expense)
      .then((ref) => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense,
          })
        );
      });
  };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id = "" } = {}) => {
  return {
    type: "REMOVE_EXPENSE",
    id,
  };
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => {
  return {
    type: "EDIT_EXPENSE",
    id,
    updates,
  };
};

export const setExpenses = (expenses) => {
  return {
    type: "SET_EXPENSES",
    expenses,
  };
};

export const startSetExpenses = () => {
  return (dispatch) => {
    return database
      .ref("expenses")
      .once("value")
      .then((snapshot) => {
        const parsedExpenses = [];

        snapshot.forEach((childSnapshot) => {
          parsedExpenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });

        dispatch(setExpenses(parsedExpenses));
      })
      .catch((r) => console.log("Error: ", r));
  };
};

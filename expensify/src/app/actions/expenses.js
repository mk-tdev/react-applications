import database from "../../firebase/firebase";

// ADD_EXPENSE
export const addExpense = (expense = {}) => {
  return {
    type: "ADD_EXPENSE",
    expense,
  };
};

export const initAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const currentUserID = getState().auth.uid;

    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0,
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    return database
      .ref(`users/${currentUserID}/expenses`)
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

export const startRemoveExpenses = ({ id } = {}) => {
  return (dispatch, getState) => {
    const currentUserID = getState().auth.uid;
    return database
      .ref(`users/${currentUserID}/expenses/${id}`)
      .remove()
      .then(() => {
        dispatch(removeExpense({ id }));
      })
      .catch((r) => console.log("Error: ", r));
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

export const startEditExpenses = (id, updates) => {
  return (dispatch, getState) => {
    const currentUserID = getState().auth.uid;
    return database
      .ref(`users/${currentUserID}/expenses/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editExpense(id, updates));
      })
      .catch((r) => console.log("Error: ", r));
  };
};

export const setExpenses = (expenses) => {
  return {
    type: "SET_EXPENSES",
    expenses,
  };
};

export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const currentUserID = getState().auth.uid;
    return database
      .ref(`users/${currentUserID}/expenses`)
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

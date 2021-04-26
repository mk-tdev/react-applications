import React from "react";

class ExpenseForm extends React.Component {
  state = {
    description: "",
    note: "",
    amount: "",
  };

  onDescriptionChange = (e) => {
    const description = e.target.value;

    this.setState(() => ({
      description,
    }));
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({
      note,
    }));
  };

  onAmountChange = ({ target }) => {
    const amount = target.value;

    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  render() {
    return (
      <div>
        <form>
          <div>
            <input
              type="text"
              autoFocus
              placeholder="Description"
              value={this.state.description}
              onChange={this.onDescriptionChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Amount"
              value={this.state.amount}
              onChange={this.onAmountChange}
            />
          </div>
          <div>
            <textarea
              placeholder="Add a note about it"
              value={this.state.note}
              onChange={this.onNoteChange}
            ></textarea>
          </div>

          <div>
            <button>Add Expense</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;

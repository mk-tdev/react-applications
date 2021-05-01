import React from "react";
import moment from "moment";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocued: false,
      errorText: "",
    };
  }

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

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onDateChanged = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onFocuesChanged = ({ focused }) => {
    this.setState(() => ({
      calendarFocued: focused,
    }));
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description && !this.state.amount) {
      this.setState(() => ({ errorText: "Please provide proper data!" }));
    } else {
      this.setState(() => ({ errorText: "" }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.errorText && (
          <p className="errorText">{this.state.errorText}</p>
        )}
        <form onSubmit={this.onFormSubmit}>
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
            <SingleDatePicker
              date={this.state.createdAt}
              onDateChange={this.onDateChanged}
              focused={this.state.calendarFocued}
              onFocusChange={this.onFocuesChanged}
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
          </div>

          <div>
            <button>
              {this.props.expense ? "Edit Expense" : "Add Expense"}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;

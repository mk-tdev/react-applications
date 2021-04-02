import React from "react";

export default class AddOption extends React.Component {
  onSubmitHandler = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    if (option) {
      e.target.elements.option.value = "";
      this.props.handleAddOption(option);
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    );
  }
}

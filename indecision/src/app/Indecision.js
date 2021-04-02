import React from "react";

import ActionButton from "./ActionButton";
import AddOption from "./AppOption";
import Header from "./Header";
import OptionModal from "./OptionModal";
import Options from "./Options";

export default class Indecision extends React.Component {
  state = {
    options: this.props.options,
    selectedOption: "",
    showModal: false,
  };

  handleAddOption = (opt) => {
    this.setState((prev) => ({
      options: [...prev.options, opt],
      selectedOption: "",
    }));
  };

  handleDeleteOption = () => {
    this.setState(() => ({ selectedOption: "", options: [] }));
  };

  handleSingleDeleteOption = (i) => {
    this.setState((prev) => {
      const splicedArr = prev.options;
      splicedArr.splice(i, 1);
      return { options: splicedArr, selectedOption: "" };
    });
  };

  handleCloseModal = () => {
    console.log("handleCloseModal");
    this.setState(() => ({ selectedOption: "" }));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];

    this.setState(() => ({ selectedOption: option }));
  };

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate: ", prevProps, prevState, snapshot);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate: ", nextProps, nextState);
    return true;
  }

  render() {
    const subtitle = "What do you want to do First!?";

    return (
      <div>
        <Header />

        <main>
          {/* {this.state.selectedOption && (
            <p className="selected-option">{`So you are going to ${this.state.selectedOption}`}</p>
          )} */}

          <ActionButton
            label={subtitle}
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />

          <Options
            options={this.state.options}
            handleSingleDeleteOption={this.handleSingleDeleteOption}
            handleDeleteOption={this.handleDeleteOption}
          />

          <AddOption handleAddOption={this.handleAddOption} />

          <OptionModal
            selectedOption={this.state.selectedOption}
            handleCloseModal={this.handleCloseModal}
          />
        </main>
      </div>
    );
  }
}

Indecision.defaultProps = {
  options: [
    "Learn React More",
    "Practice with the app more",
    "Code more",
    "Dream of code",
  ],
};

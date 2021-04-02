const Header = ({ title }) => {
  return <header>{title}</header>;
};

Header.defaultProps = {
  title: "Indecision App",
};

const ActionButton = ({ hasOptions, handlePick, label }) => {
  return (
    <>
      <button disabled={!hasOptions} onClick={handlePick}>
        {label}
      </button>
    </>
  );
};

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onSubmitHandler(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    if (option) {
      e.target.elements.option.value = "";
      this.props.handleAddOption(option);
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    );
  }
}

const Options = ({ options, handleDeleteOption, handleSingleDeleteOption }) => {
  return (
    <div>
      <div className="btn-container">
        <button disabled={options.length === 0} onClick={handleDeleteOption}>
          Remove All
        </button>
      </div>

      {options.length > 0 ? (
        <ol>
          {options.map((op, i) => (
            <li key={op}>
              <div className="li-option">
                <span>{op}</span>
                <span
                  className="single-delete"
                  onClick={() => handleSingleDeleteOption(i)}
                >
                  X
                </span>
              </div>
            </li>
          ))}
        </ol>
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
};

class Indecision extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: props.options,
      selectedOption: "",
    };

    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleSingleDeleteOption = this.handleSingleDeleteOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
  }

  handleAddOption(opt) {
    this.setState((prev) => ({
      options: [...prev.options, opt],
      selectedOption: "",
    }));
  }

  handleDeleteOption() {
    this.setState(() => ({ selectedOption: "", options: [] }));
  }

  handleSingleDeleteOption(i) {
    this.setState((prev) => {
      const splicedArr = prev.options;
      splicedArr.splice(i, 1);
      return { options: splicedArr, selectedOption: "" };
    });
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];

    this.setState(() => ({ selectedOption: option }));
  }

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
    const subtitle = "What do you want to do First?";

    return (
      <div>
        <Header />

        <main>
          {this.state.selectedOption && (
            <p className="selected-option">{`So you are going to ${this.state.selectedOption}`}</p>
          )}

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

          <Form handleAddOption={this.handleAddOption} />
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

ReactDOM.render(<Indecision />, document.getElementById("root"));

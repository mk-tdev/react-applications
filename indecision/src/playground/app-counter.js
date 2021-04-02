class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { counter: 0 };

    this.handlePlus = this.handlePlus.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handlePlus() {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  }
  handleMinus() {
    this.setState((prevState) => ({ counter: prevState.counter - 1 }));
  }
  handleReset() {
    this.setState({ counter: 0 });
  }

  render() {
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>

        <button onClick={this.handlePlus}>+1</button>
        <button onClick={this.handleMinus}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("root"));

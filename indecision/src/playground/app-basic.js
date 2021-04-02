console.log("I am app.js");

// JSX - Javascript XML
var template = (
  <>
    <p>I am paragraph inside app.js</p>
    <p>I am second paragraph inside app.js</p>

    <ol>
      <li>One</li>
      <li>Two</li>
    </ol>
  </>
);

var headerName = "I am a header";
var listItems = ["One", "Two"];
var sampleObj = { name: "Mkumar", favFood: "burger" };

var { name: objName } = sampleObj;

function getFavFood() {
  return sampleObj.favFood ? sampleObj.favFood : null;
}

var container = (
  <div>
    <h2>{headerName.toLocaleUpperCase() + "!"}</h2>
    <p>
      Qui nulla deserunt et ipsum non adipisicing consectetur commodo aliquip in
      consectetur.
    </p>
    <ol>
      {listItems.map((el) => (
        <li key={el}>{el}</li>
      ))}
    </ol>

    {objName === "Mkumar" && <p>{objName}</p>}
    <p>{getFavFood()}</p>
  </div>
);

let count = 0;

const minusOne = () => {
  count--;
  renderCounterApp();
};
const addOne = () => {
  count++;
  renderCounterApp();
};
const reset = () => {
  count = 0;
  renderCounterApp();
};

const appRoot = document.getElementById("root");

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();

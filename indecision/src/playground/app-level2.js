const app = {
  title: "Indecision App",
  subtitle: "What do you want to do?",
  options: ["Learn React More", "Practice with the app more"],
};

const onSubmitHandler = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
  }

  renderCounterApp();
};

const onRemoveHandler = () => {
  app.options = [];
  renderCounterApp();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  console.log(option);
};

const appRoot = document.getElementById("root");

const renderCounterApp = () => {
  const template = (
    <div>
      <header>{app.title}</header>

      <main>
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>
          What should I do?
        </button>

        {app.options.length > 0 ? (
          <ol>
            {app.options.map((op) => (
              <li key={op}>{op}</li>
            ))}
          </ol>
        ) : (
          <p>No data found</p>
        )}

        <form onSubmit={onSubmitHandler}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
        <button onClick={onRemoveHandler}>Remove All</button>
      </main>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderCounterApp();

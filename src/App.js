import "./App.css";

const App = function () {
  const name = "Arpit Jana";

  return (
    <div className="App">
      {name ? (
        <>
          <h1>Hello {name}</h1>
        </>
      ) : (
        <>
          <h1>No User Found !</h1>
          <p>Please Signup</p>
        </>
      )}
    </div>
  );
};

export default App;

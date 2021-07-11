import React, { useContext } from "react";

const Context = React.createContext();

function App() {
  return (
    <Context.Provider value={[1, "Hello"]}>
      <div className="App">
        <Child />
      </div>
    </Context.Provider>
  );
}

function Child(props) {
  return <GrandChild />;
}

function GrandChild(props) {
  const value = useContext(Context);
  console.log(value);
  return <h1>{value}</h1>;
}

export default App;

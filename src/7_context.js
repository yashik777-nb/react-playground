import React from "react";

function App() {
  return (
    <div className="App">
      <Child value={1} />
    </div>
  );
}

function Child(props) {
  return <GrandChild value={props.value} />;
}

function GrandChild(props) {
  return <h1>{props.value}</h1>;
}

export default App;

import React, { useState } from "react";

function App() {
  const [state, setState] = useState(1);

  return (
    <div className="App">
      <Child value={state} />
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

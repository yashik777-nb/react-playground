import React, { useState } from "react";

function App() {
  const [state, setState] = useState("");

  const handlleChange = (e) => {
    // setState(e.target.value);
  };

  return (
    <div className="App">
      <input value={state} onChange={handlleChange} />
      State: {state}
    </div>
  );
}

export default App;

import React, { useRef, useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Controlled />
      <UnControlled />
    </div>
  );
}

function Controlled() {
  const [state, setState] = useState("");

  function alertValue() {
    alert(state);
  }

  return (
    <div>
      <p>Controlled</p>
      <input
        type="text"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <button onClick={alertValue}>Click Ok</button>
    </div>
  );
}

function UnControlled() {
  const inputRef = useRef();

  function alertValue() {
    alert(inputRef.current.value);
  }

  return (
    <div>
      <p>UnControlled</p>
      <input type="text" ref={inputRef} />
      <button onClick={alertValue}>Click Ok</button>
    </div>
  );
}

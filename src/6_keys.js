import React, { useState } from "react";

const data = [];

for (let i = 0; i < 10; i++) {
  data.push({
    number: i,
    id: "id" + i,
  });
}

function Item(props) {
  return <h1 onClick={() => props.delete(props.id)}>{props.number}</h1>;
}

export default function App() {
  const [state, setState] = useState(data);

  function deleteNumber(id) {
    const newData = state.filter((num) => num.id !== id);
    setState(newData);
  }

  return (
    <div>
      {state.map((number, i) => (
        <Item
          key={i}
          id={number.id}
          number={number.number}
          delete={deleteNumber}
        />
      ))}
    </div>
  );
}

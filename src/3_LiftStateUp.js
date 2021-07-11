import React, { useState } from "react";

export default function App() {
  const [items, setItems] = useState(["foo", "bar", "baz"]);

  return (
    <div className="App">
      <List items={items} />
      <ItemsCount count={items.length} />
    </div>
  );
}

function List(props) {
  return (
    <div>
      {props.items.map((item, index) => (
        <h1 key={index}>{item}</h1>
      ))}
    </div>
  );
}

function ItemsCount(props) {
  return <h1>{props.count}</h1>;
}

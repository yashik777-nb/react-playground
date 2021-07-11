import React, { useEffect, useRef, useState } from "react";

export default function App() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
    console.log(inputRef);
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
}

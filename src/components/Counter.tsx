"use client";

import { useState } from "react";

function Counter(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);
  function dec() {
    setCounter((current) => (current += 1));
  }
  return (
    <div>
      <button onClick={dec}>{counter}</button>
    </div>
  );
}

export default Counter;

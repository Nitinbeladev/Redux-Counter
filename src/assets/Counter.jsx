import React from "react";
import useCounter from "./useCounter";

function Counter() {
  const [value, increase, decrease] = useCounter(10);

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

export default Counter;

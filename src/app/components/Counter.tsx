"use client";

import { useState } from "react";

const Counter = ({ startingCount }) => {
  const [count, setCount] = useState(startingCount);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  const scientists = ["Isaac Newton", "Albert Einstein", "Alan Turing"];

  return (
    <>
      <p>Hello from Counter. Count = {count}</p>
      <p>Count is {count % 2 === 0 ? "even" : "odd"}.</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      {scientists.map(scientist => <h2 key={scientist}>{scientist}</h2>)}
    </>
  );
};

export default Counter;

import React, { useState } from "react";
const Index = () => {
  let [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  // setCount((prevCount) => prevCount + 1);
  const decrementCount = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
};
export default Index;

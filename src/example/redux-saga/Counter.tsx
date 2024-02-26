import React from "react";

const Counter = ({
  value,
  onIncrement,
  onDecrement,
}: {
  value: number;
  onIncrement: VoidFunction;
  onDecrement: VoidFunction;
}) => (
  <div>
    <button onClick={onIncrement}>Increment</button>
    <button onClick={onDecrement}>Decrement</button>
    <hr />
    <div>Clicked: {value} times</div>
  </div>
);

export default Counter;

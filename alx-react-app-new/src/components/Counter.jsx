import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount((x) => x + 1)}>Increment </button>
      <button onClick={() => setCount((x) => x - 1)}>Decrement </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
export default Counter;


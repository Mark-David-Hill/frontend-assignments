import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(1);

  return (
    <div className="widget">
      <h2>Count: {count}</h2>
      <button onClick={() => count > 1 && setCount((prev) => prev - 1)}>
        Subtract
      </button>
      <button onClick={() => setCount((prev) => prev + 1)}>Add</button>
    </div>
  );
}

export default Counter;

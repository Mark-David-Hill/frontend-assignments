import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (count === 0) {
      alert("The count cannot be set to 0");
      setCount(1);
    }
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount((prev) => prev - 1)}>Subtract</button>
      <button onClick={() => setCount((prev) => prev + 1)}>Add</button>
    </div>
  );
}

export default Counter;

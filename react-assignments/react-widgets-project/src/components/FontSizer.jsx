import { useState } from "react";

function FontSizer() {
  const [textSize, setTextSize] = useState(30);

  return (
    <div>
      <h2 style={{ fontSize: textSize }}>Current Size: {textSize}px</h2>
      <button onClick={() => textSize > 0 && setTextSize((prev) => prev - 5)}>
        Shrink
      </button>
      <button onClick={() => textSize < 100 && setTextSize((prev) => prev + 5)}>
        Grow
      </button>
    </div>
  );
}

export default FontSizer;

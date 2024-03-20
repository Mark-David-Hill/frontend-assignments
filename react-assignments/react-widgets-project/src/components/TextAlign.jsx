import { useState } from "react";

function TextAlign() {
  const [alignment, setAlignment] = useState("center");

  return (
    <div>
      <h2 style={{ textAlign: alignment }}>
        Currently Aligned to the {alignment}
      </h2>
      <button onClick={() => setAlignment("left")}>Left</button>
      <button onClick={() => setAlignment("center")}>Center</button>
      <button onClick={() => setAlignment("right")}>Right</button>
    </div>
  );
}

export default TextAlign;

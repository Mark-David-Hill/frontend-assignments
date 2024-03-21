import { useState } from "react";

function TextAlign() {
  const [alignment, setAlignment] = useState("center");

  return (
    <div className="widget-container">
      <h2 style={{ textAlign: alignment }}>
        Currently Aligned to the {alignment}
      </h2>
      <div className="horizontal">
        <button onClick={() => setAlignment("left")}>Left</button>
        <button onClick={() => setAlignment("center")}>Center</button>
        <button onClick={() => setAlignment("right")}>Right</button>
      </div>
    </div>
  );
}

export default TextAlign;

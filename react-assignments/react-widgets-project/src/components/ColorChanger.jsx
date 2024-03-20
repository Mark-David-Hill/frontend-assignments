import { useState } from "react";

function ColorChanger() {
  const [textColor, setTextColor] = useState("black");

  return (
    <div>
      <h2 style={{ color: textColor }}>{textColor}</h2>
      <input
        placeholder="color name"
        type="text"
        onChange={(e) => setTextColor(e.target.value)}
      />
    </div>
  );
}

export default ColorChanger;

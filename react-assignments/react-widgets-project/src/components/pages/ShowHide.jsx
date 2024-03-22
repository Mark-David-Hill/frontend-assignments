import { useState } from "react";

function ShowHide() {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <div className="widget-container">
      <h2 style={isHidden ? { display: "none" } : { display: "block" }}>
        Hide Me
      </h2>
      <button onClick={() => setIsHidden((prev) => !prev)}>
        {isHidden ? "Show" : "Hide"}
      </button>
    </div>
  );
}

export default ShowHide;

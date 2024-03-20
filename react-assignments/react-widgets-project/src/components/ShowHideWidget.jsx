import { useState } from "react";

function ShowHideWidget() {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <div>
      <h2 style={isHidden ? { display: "none" } : { display: "block" }}>
        "Hide Me"
      </h2>
      <button onClick={() => setIsHidden((prev) => !prev)}>
        {isHidden ? "Show" : "Hide"}
      </button>
    </div>
  );
}

export default ShowHideWidget;

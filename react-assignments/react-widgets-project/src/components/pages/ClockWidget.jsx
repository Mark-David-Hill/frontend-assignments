import { useState } from "react";

import Clock from "./Clock";

function ClockWidget() {
  const [isMounted, setIsMounted] = useState(true);

  return (
    <div className="widget-container">
      {isMounted && <Clock />}
      <button onClick={() => setIsMounted((prev) => !prev)}>
        {isMounted ? "Unmount" : "Mount"}
      </button>
    </div>
  );
}

export default ClockWidget;

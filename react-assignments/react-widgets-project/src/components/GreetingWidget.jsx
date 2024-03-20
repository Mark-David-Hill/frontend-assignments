import { useState } from "react";

function GretingWidget() {
  const greetingMessage = "Hello, how are you today?";
  const farewellMessage = "Goodbye, hope to see you soon.";
  const [message, setMessage] = useState(greetingMessage);

  return (
    <div>
      <h2>{message}</h2>
      <button
        onClick={() =>
          setMessage((prev) =>
            prev === greetingMessage ? farewellMessage : greetingMessage
          )
        }
      >
        Toggle Me
      </button>
    </div>
  );
}

export default GretingWidget;

import { useState } from "react";

function Greeting() {
  const greetingMessage = "Hello, how are you today?";
  const farewellMessage = "Goodbye, hope to see you soon.";
  const [message, setMessage] = useState(greetingMessage);

  return (
    <div className="widget">
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

export default Greeting;

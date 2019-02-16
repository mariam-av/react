import React from "react";

function Joke(prop) {
  return (
    <div>
      <h3 style={{ display: prop.question ? "block" : "none" }}>
        {prop.question}
      </h3>
      <h3>{prop.punchline}</h3>
    </div>
  );
}

export default Joke;

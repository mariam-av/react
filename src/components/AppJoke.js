import React from "react";
import Joke from "./Joke";

function AppJoke() {
  return (
    <div>
      <Joke question="a?" punchline="b" />
      <Joke question="" punchline="d" />
      <Joke question="e?" punchline="f" />
    </div>
  );
}

export default AppJoke;

import React from "react";
import Property from "./Property";

function Props() {
  return (
    <div>
      <Property contact={{ name: "Mariam", link: "a" }} />
      <Property contact={{ name: "Mher", link: "b" }} />
      <Property contact={{ name: "Lilith", link: "c" }} />
    </div>
  );
}

export default Props;

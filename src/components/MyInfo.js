import React from "react";

var divStyle = {
  color: "red"
};

function MyInfo() {
  return (
    <div style={divStyle}>
      <h1>Mariam</h1>
      <p>Learning React</p>
      <ol>
        <li>Spain</li>
        <li>Italy</li>
        <li>France</li>
      </ol>
    </div>
  );
}

export default MyInfo;

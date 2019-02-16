import React from "react";

function handleClick() {
  alert("Something");
}
function App() {
  return (
    <div>
      <img onMouseOver={() => {}} src="https://www.fillmurray.com/200/300" />
      <button onClick={handleClick}> Click Me </button>
    </div>
  );
}
export default App;

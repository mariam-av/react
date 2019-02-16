import React from "react";

function Property(props) {
  console.log(props);
  return (
    <div>
      <p>{props.contact.name}</p>
      <a href="#">{props.contact.link}</a>
    </div>
  );
}
export default Property;

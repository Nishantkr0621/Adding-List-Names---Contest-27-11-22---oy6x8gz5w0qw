import React from "react";

const ListItems = (props) => {
  return <li className="items" key={props.index}>{props.valuex}</li>;
};
export default ListItems;

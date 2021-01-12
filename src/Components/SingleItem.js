import React from "react";

function SingleItem(props) {
  return <li {...props}>{props.children}</li>;
}

export default SingleItem;

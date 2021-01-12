import React, { useEffect, useState } from "react";

function Content(props) {
  const [item, setItem] = useState("");
  //   const [item, setItem] = useState(
  //     "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used inlaying out print, graphic or web designs. The passage is attributed toan unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a  type specimen book."
  //   );
  useEffect(() => {
    setItem(props.contents);
    //setContents(item);
  }, [props.contents]);
  return (
    <div style={{ border: "1px solid black" }}>
      <h2
        onClick={(e) => {
          console.log("click", e.target);
          //   props.setContents(item);
        }}
      >
        {item}
      </h2>
    </div>
  );
}

export default Content;

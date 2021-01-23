import React from "react";
import { Button } from "reactstrap";
function AddButton() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button
        // className="btns-color"
        style={{
          marginBottom: "-3vh",
          zIndex: "2",
          borderRadius: "50%  50%",
        }}
        color="primary"
      >
        +
      </Button>
    </div>
  );
}

export default AddButton;

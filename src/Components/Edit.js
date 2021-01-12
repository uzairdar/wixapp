import React from "react";

function Edit(props) {
  const { values, setValues } = props;
  return (
    <div>
      <label>
        {" "}
        <h3>Write here to edit </h3>
      </label>
      <textarea
        value={values}
        onChange={(e) => setValues(e.target.value)}
        style={{
          width: "100%",
          minHeight: "200px",
          maxHeight: "60px",
          //   minHeight: "60px",
        }}
      />
    </div>
  );
}

export default Edit;

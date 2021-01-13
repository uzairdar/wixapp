import React, { useEffect } from "react";

function Edit(props) {
  const {
    values,
    setValues,
    completedTasks,
    setCompletedTasks,
    heading,
    contents,
    subtitle,
    setHeading,
    setContents,
    setSubtitle,
  } = props;
  useEffect(() => {
    console.log("here", values);
  }, [props]);
  return (
    <div>
      <label>
        {" "}
        <h3>Write here to edit </h3>
      </label>
      <textarea
        value={values.value}
        onChange={(e) => {
          var a = completedTasks;

          //   a[index]=<About
          //   subtitle={subtitle}
          //   heading={heading}
          //   contents={contents}
          //   // setKeys={setKeys}
          //   index={index}
          //   setValues={setValues}
          //   // setVisible={setVisible}
          //   // visible={visible}
          // />
        }}
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

import React from "react";
import "./css/about.css";
import about from "./assets/about.jpg";
function About(props) {
  const {
    subtitle,
    contents,
    heading,
    setVisible,
    visible,
    setValues,
    setKeys,
  } = props;

  return (
    <div>
      <div className="main-cont">
        <div className="onLeft">
          <img src={about} style={{ width: "100%", height: "100%" }} />
        </div>
        <div className="onRight">
          <div className="inner-cont">
            <h2
              className="heading"
              onClick={(e) => {
                if (visible) {
                } else {
                  setVisible(!visible);
                }
                setValues(e.target.innerHTML);
                setKeys("heading");
                console.log("vals", e.target.innerHTML);
              }}
            >
              {heading}
            </h2>
            <p
              onClick={(e) => {
                if (visible) {
                } else {
                  setVisible(!visible);
                }
                setValues(e.target.innerHTML);
                setKeys("subtitle");

                console.log("vals", e.target.innerHTML);
              }}
            >
              {subtitle}{" "}
            </p>
            <p
              onClick={(e) => {
                if (visible) {
                } else {
                  setVisible(!visible);
                }
                setValues(e.target.innerHTML);
                setKeys("content");
                console.log("vals", e.target.innerHTML);
              }}
            >
              {contents}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

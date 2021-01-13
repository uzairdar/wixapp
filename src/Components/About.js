import React, { useState, useEffect } from "react";
import "./css/about.css";
import about from "./assets/about.jpg";
function About(props) {
  const {
    subtitle,
    contents,
    heading,
    // setVisible,
    // visible,
    index,
    setValues,
    // setKeys,
  } = props;
  const [count, setCount] = useState(0);
  const getData = (title) => {
    return { index, title, subtitle, contents, heading };
  };

  const [arr, setArr] = useState([
    <h2
      onClick={(e) => {
        console.log("vals", e.target.innerHTML);
        const data = getData("heading");

        setValues(data);
        console.log("location:", index);
      }}
    >
      {heading}
    </h2>,
    <p
      onClick={(e) => {
        const data = getData("subtitle");
        setValues(data);
        console.log("vals", e.target.innerHTML);
      }}
    >
      {subtitle}
    </p>,
    <p
      onClick={(e) => {
        const data = getData("contents");
        setValues(data);
        console.log("vals", e.target.innerHTML);
      }}
    >
      {contents}
    </p>,
  ]);
  const goUp = () => {
    var arr2 = arr;
    [
      arr2[count % arr2.length],
      arr2[(count - 1 < 0 ? arr2.length - 1 : count - 1) % arr2.length],
    ] = [
      arr2[(count - 1 < 0 ? arr2.length - 1 : count - 1) % arr2.length],
      arr2[count % arr2.length],
    ];
    setArr(arr2);
    setCount(count - 1 < 0 ? arr2.length - 1 : count - 1);
  };
  const goDown = () => {
    // var obj;
    // obj=arr2[index]
    var arr2 = arr;

    [arr2[count % arr2.length], arr2[(count + 1) % arr2.length]] = [
      arr2[(count + 1) % arr2.length],
      arr2[count % arr2.length],
    ];
    setArr(arr2);
    setCount(count + 1);
  };
  return (
    <div>
      <div className="main-cont">
        <div className="onLeft">
          <img src={about} style={{ width: "100%", height: "100%" }} />
        </div>
        <div className="onRight">
          <div className="inner-cont">
            <div className="about-btns">
              <button onClick={() => goUp()}>Up</button>
              <button onClick={() => goDown()}>Down</button>
            </div>
            {arr.map((single) => single)}
            {/* <h2
              className="heading"
              onClick={(e) => {
                console.log("vals", e.target.innerHTML);
                const data = getData("heading");

                setValues(data);
                console.log("location:", index);
              }}
            >
              {heading}
            </h2>
            <p
              onClick={(e) => {
                const data = getData("subtitle");

                setValues(data);

                console.log("vals", e.target.innerHTML);
              }}
            >
              {subtitle}{" "}
            </p>
            <p
              onClick={(e) => {
                const data = getData("contents");
                setValues(data);
                console.log("vals", e.target.innerHTML);
              }}
            >
              {contents}
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

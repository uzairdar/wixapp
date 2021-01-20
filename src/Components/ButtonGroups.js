import React, { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import { connect } from "react-redux";
import { setCompleted, setIndex, setTitle } from "../redux/ActionCreators";
import About from "./About";
import AboutTwo from "./AboutTwo";
import Header from "./Header";
import Header2 from "./Header2";

function ButtonGroups({
  index,
  tasks,
  goUp,
  goDown,
  setCompleteData,
  Editable,
  setVisible,
  setTitleData,
  setIndexData,
}) {
  const options = ["Duplicate", "Height", "Delete"];
  const [drop, setDrop] = useState(false);
  const [heightCheck, setHeightCheck] = useState(true);
  const handleClick = (e, count) => {
    console.log("index", count, index);
    if (count === 0) {
      var temparr = tasks;
      temparr.splice(index + 1, 0, tasks[index]);
      setCompleteData(temparr);
      setDrop(false);
      setVisible(false);
    } else if (count === 1) {
      setHeightCheck(false);
    } else if (count === 2) {
      var temparr = tasks;
      temparr.splice(index, 1);
      setCompleteData(temparr);
      setDrop(false);
      setVisible(false);
    }
  };

  const setHeight = (selected) => {
    var newProps = tasks[index].props;
    var newHeight;

    var newarr = tasks;
    var selectedComp;
    if (tasks[index].props.title === "Header") {
      if (selected === "plus") {
        newHeight = (parseInt(newProps.height) + 30).toString();
      } else {
        newHeight = (parseInt(newProps.height) - 30).toString();
      }
      selectedComp = (
        <Header
          title="Header"
          height={newHeight}
          section="main"
          Editable="false"
        />
      );
    } else if (tasks[index].props.title === "Header2") {
      if (selected === "plus") {
        newHeight = (parseInt(newProps.height) + 30).toString();
      } else {
        newHeight = (parseInt(newProps.height) - 30).toString();
      }
      selectedComp = (
        <Header2
          title="Header2"
          height={newHeight}
          section="main"
          Editable="false"
        />
      );
    } else if (tasks[index].props.title === "About") {
      if (selected === "plus") {
        newHeight = (parseInt(newProps.height) + 30).toString();
      } else {
        newHeight = (parseInt(newProps.height) - 30).toString();
      }
      selectedComp = (
        <About
          section="main"
          title="About"
          height={newHeight}
          heading={tasks[index].props.heading}
          subtitle={tasks[index].props.subtitle}
          contents={tasks[index].props.contents}
          Editable="true"
        />
      );
    } else if (tasks[index].props.title === "About2") {
      if (selected === "plus") {
        newHeight = (parseInt(newProps.height) + 30).toString();
      } else {
        newHeight = (parseInt(newProps.height) - 30).toString();
      }
      selectedComp = (
        <AboutTwo
          section="main"
          title="About2"
          height={newHeight}
          heading={tasks[index].props.heading}
          subtitle={tasks[index].props.subtitle}
          contents={tasks[index].props.contents}
          Editable="true"
        />
      );
    }

    newarr[index] = selectedComp;
    setCompleteData(newarr);
  };
  return (
    <div>
      {heightCheck && (
        <div className="alignment" onMouseLeave={() => setDrop(false)}>
          <div style={{ display: "flex" }}>
            {tasks[index].props.Editable === "true" && (
              <button
                className="btns-color"
                onClick={() => {
                  setIndexData(index);
                  setVisible(true);
                  // setTitleData(title);
                }}
              >
                Edit
              </button>
            )}
            {tasks[index].props.Editable === "false" && (
              <button className="btns-color" onClick={() => setVisible(false)}>
                Cant edit
              </button>
            )}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "white",
                cursor: "pointer",
                zIndex: "100",
              }}
            >
              {drop &&
                options.map((single, count) => (
                  <p className="drop" onClick={(e) => handleClick(e, count)}>
                    {single}
                  </p>
                ))}
              <button
                className="btns-color"
                style={{ height: "100%" }}
                onMouseOver={() => setDrop(!drop)}
              >
                ...
              </button>
            </div>
          </div>
          <div className="about-btns">
            <button
              className="btns-color"
              onClick={() => {
                setVisible(false);
                goUp(index, tasks);
              }}
            >
              Up
            </button>
            <button
              className="btns-color"
              onClick={() => {
                setVisible(false);

                goDown(index, tasks);
              }}
            >
              Down
            </button>
          </div>
        </div>
      )}
      {!heightCheck && (
        <div className="about-btns-left">
          <button
            className="btns-color"
            onClick={() => {
              setHeight("plus");
            }}
          >
            Zoom in
          </button>
          <button
            className="btns-color"
            onClick={() => {
              setHeight("minus");
            }}
          >
            Zoom out
          </button>
          <button
            className="btns-color"
            onClick={() => {
              setHeightCheck(true);
              setDrop(false);
            }}
          >
            cancel
          </button>
        </div>
      )}
    </div>
  );
}
const mapStateToProps = (state) => {
  console.log("state", state.User);
  // const { user } = state.state;
  // const {tasks}=
  const { User } = state;
  const heading = User.data.Heading;
  const tasks = User.completedTasks;
  return { User, tasks };
};
const mapDispatchtoProps = (dispatch) => {
  return {
    setIndexData: (data) => dispatch(setIndex(data)),
    setCompleteData: (data) => dispatch(setCompleted(data)),
    setTitleData: (data) => dispatch(setTitle(data)),
  };
};
export default connect(mapStateToProps, mapDispatchtoProps)(ButtonGroups);

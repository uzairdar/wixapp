import React, { useState } from "react";
import { FaPen } from "react-icons/fa";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { setCompleted, setIndex, setTitle } from "../redux/ActionCreators";
import About from "./About";
import AboutTwo from "./AboutTwo";
import Header from "./Header";
import Header2 from "./Header2";
import AboutTemp1 from "./About Tempelates/AboutTemp1";
import AboutTemp2 from "./About Tempelates/AboutTemp2";
import AboutTwoTemp1 from "./About Tempelates/AboutTwoTemp1";
import AboutTwoTemp2 from "./About Tempelates/AboutTwoTemp2";

function ButtonGroups({
  index,
  tasks,
  goUp,
  goDown,
  setCompleteData,
  setVisible,
  setDesignVisible,
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
    var tempProps = tasks[index].props;
    if (tasks[index].props.title === "Header") {
      if (selected === "plus") {
        newHeight = (parseInt(newProps.height) + 30).toString();
      } else {
        newHeight = (parseInt(newProps.height) - 30).toString();
      }
      selectedComp = <Header {...tempProps} height={newHeight} />;
    } else if (tasks[index].props.title === "Header2") {
      if (selected === "plus") {
        newHeight = (parseInt(newProps.height) + 30).toString();
      } else {
        newHeight = (parseInt(newProps.height) - 30).toString();
      }
      selectedComp = <Header2 {...tempProps} height={newHeight} />;
    } else if (tasks[index].props.title === "About") {
      if (selected === "plus") {
        newHeight = (parseInt(newProps.height) + 30).toString();
      } else {
        newHeight = (parseInt(newProps.height) - 30).toString();
      }
      if (!tasks[index].props.template) {
        selectedComp = <About {...tempProps} height={newHeight} />;
      } else if (tasks[index].props.template === "temp1") {
        selectedComp = <AboutTemp1 {...tempProps} height={newHeight} />;
      } else if (tasks[index].props.template === "temp2") {
        selectedComp = <AboutTemp2 {...tempProps} height={newHeight} />;
      }
    } else if (tasks[index].props.title === "About2") {
      if (selected === "plus") {
        newHeight = (parseInt(newProps.height) + 30).toString();
      } else {
        newHeight = (parseInt(newProps.height) - 30).toString();
      }
      if (!tasks[index].props.template) {
        selectedComp = <AboutTwo {...tempProps} height={newHeight} />;
      } else if (tasks[index].props.template === "temp1") {
        selectedComp = <AboutTwoTemp1 {...tempProps} height={newHeight} />;
      } else if (tasks[index].props.template === "temp2") {
        selectedComp = <AboutTwoTemp2 {...tempProps} height={newHeight} />;
      }
    }

    newarr[index] = selectedComp;
    setCompleteData(newarr);
  };
  return (
    <div className="show">
      {heightCheck && (
        <div className="alignment" onMouseLeave={() => setDrop(false)}>
          <div style={{ display: "flex" }}>
            {tasks[index].props.Editable === "true" && (
              <div>
                <Button
                  color="primary"
                  size="sm"
                  className="mr-1"
                  onClick={() => {
                    setIndexData(index);
                    setDesignVisible(false);
                    setVisible(true);
                  }}
                >
                  <FaPen
                    style={{ marginRight: "0.5vw", marginBottom: "0.5vh" }}
                  />
                  Edit
                </Button>
                <Button
                  color="primary"
                  size="sm"
                  onClick={() => {
                    setIndexData(index);
                    setVisible(false);

                    setDesignVisible(true);
                  }}
                >
                  Design
                </Button>
              </div>
            )}
            {tasks[index].props.Editable === "false" && (
              <div>
                <Button
                  color="primary"
                  size="sm"
                  className="mr-1"
                  onClick={() => setVisible(false)}
                >
                  Can't edit
                </Button>
                <Button
                  color="primary"
                  size="sm"
                  onClick={() => setVisible(false)}
                >
                  Can't Design
                </Button>
              </div>
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
              <Button
                // className="btns-color"
                className="ml-1"
                color="primary"
                size="sm"
                style={{ height: "100%" }}
                onMouseOver={() => setDrop(!drop)}
              >
                ...
              </Button>
            </div>
          </div>
          <div className="about-btns">
            <Button
              // className="btns-color"
              color="primary"
              size="sm"
              onClick={() => {
                setVisible(false);
                goUp(index, tasks);
              }}
            >
              Up
            </Button>
            <Button
              // className="btns-color"
              color="primary"
              size="sm"
              className="ml-1"
              onClick={() => {
                setVisible(false);

                goDown(index, tasks);
              }}
            >
              Down
            </Button>
          </div>
        </div>
      )}
      {!heightCheck && (
        <div className="about-btns-left">
          <Button
            //className="btns-color"
            className="mr-1"
            color="primary"
            size="sm"
            onClick={() => {
              setHeight("plus");
            }}
          >
            Zoom in
          </Button>
          <Button
            // className="btns-color"
            className="mr-1"
            color="primary"
            size="sm"
            onClick={() => {
              setHeight("minus");
            }}
          >
            Zoom out
          </Button>
          <Button
            // className="btns-color"
            color="primary"
            size="sm"
            onClick={() => {
              setHeightCheck(true);
              setDrop(false);
            }}
          >
            cancel
          </Button>
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

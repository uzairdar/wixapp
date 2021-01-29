import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { FaArrowLeft } from "react-icons/fa";

import { Button, Card, CardHeader, CardTitle } from "reactstrap";
import About from "./About";
import AboutTwo from "./AboutTwo";
import AboutTemp1 from "./About Tempelates/AboutTemp1";
import AboutTemp2 from "./About Tempelates/AboutTemp2";
import { setCompleted } from "../redux/ActionCreators";
import AboutTwoTemp1 from "./About Tempelates/AboutTwoTemp1";
import AboutTwoTemp2 from "./About Tempelates/AboutTwoTemp2";
function Design(props) {
  const { setVisible, setDesignVisible, tasks, Index, setCompleteData } = props;
  const [comp, setComp] = useState(null);
  const [single, setSingle] = useState(null);
  const [templates, setTemplates] = useState([]);
  useEffect(() => {
    setComp(null);
    setTemplates([]);
    setComp(tasks[Index]);
    checkProps();
    getTemp();
  }, [props]);
  const getTemp = () => {
    const height = "150";
    var alpha = tasks[Index].props;
    if (alpha.title === "About") {
      setTemplates([
        <AboutTemp1
          {...alpha}
          height={height}
          template="temp1"
          headHeight="9px"
          subHeight="5px"
        />,
        <AboutTemp2
          {...alpha}
          template="temp2"
          height={height}
          headHeight="9px"
          subHeight="5px"
        />,
      ]);
    } else if (alpha.title === "About2") {
      setTemplates([
        <AboutTwoTemp1
          {...alpha}
          height={height}
          template="temp1"
          headHeight="9px"
          subHeight="5px"
        />,
        <AboutTwoTemp2
          {...alpha}
          template="temp2"
          height={height}
          headHeight="9px"
          subHeight="5px"
        />,
      ]);
    }
  };
  const setSection = (position) => {
    const temparr = tasks;
    const height = "350";

    temparr[Index] = templates[position];
    var selectedComp;
    var alpha = tasks[Index].props;
    var beta = templates[position].props;
    if (beta.title === "About") {
      if (beta.template === "temp1") {
        selectedComp = (
          <AboutTemp1 {...alpha} height={height} headHeight="2" subHeight="5" />
        );
      } else if (beta.template === "temp2") {
        selectedComp = (
          <AboutTemp2 {...alpha} height={height} headHeight="2" subHeight="5" />
        );
      }
    }
    if (beta.title === "About2") {
      if (beta.template === "temp1") {
        selectedComp = (
          <AboutTwoTemp1
            {...alpha}
            height={height}
            headHeight="2"
            subHeight="5"
          />
        );
      } else if (beta.template === "temp2") {
        selectedComp = (
          <AboutTwoTemp2
            {...alpha}
            height={height}
            headHeight="2"
            subHeight="5"
          />
        );
      }
    }
    temparr[Index] = selectedComp;

    setCompleteData(temparr);
    console.log("yes passed", temparr);
  };
  const checkProps = () => {
    const height = "150";
    var alpha = tasks[Index].props;
    if (alpha.title === "About") {
      if (!alpha.template) {
        setComp(
          <About {...alpha} height={height} headHeight="9px" subHeight="5px" />
        );
      } else if (alpha.template === "temp1") {
        setComp(
          <AboutTemp1
            {...alpha}
            height={height}
            headHeight="9px"
            subHeight="5px"
          />
        );
      } else if (alpha.template === "temp2") {
        setComp(
          <AboutTemp2
            {...alpha}
            height={height}
            headHeight="9px"
            subHeight="5px"
          />
        );
      }
    } else if (alpha.title === "About2") {
      setComp(
        <AboutTwo {...alpha} height={height} headHeight="9px" subHeight="5px" />
      );
    }
  };
  return (
    <div style={{ height: "80%", overflowY: "scroll", overflowX: "hidden" }}>
      <Card style={{ minHeight: "300px" }}>
        <CardHeader>
          <FaArrowLeft
            onClick={() => {
              setDesignVisible(false);
              setVisible(true);
            }}
          />
        </CardHeader>
        <CardTitle>Section Design</CardTitle>
        <p className="text-muted" style={{ fontSize: "1.5vh" }}>
          Customize your section design or try a new layout. Go to Themes to
          change design across your site.
        </p>
        <div
          style={{
            height: "150px",
            border: "1px solid black",
            marginBottom: "40px",
          }}
        >
          {comp}
        </div>
        <h4>Tempelates</h4>
        {templates.map((single, position) => (
          <div
            className="borders"
            style={{ marginBottom: "25px" }}
            key={position}
            onClick={() => setSection(position)}
          >
            {single}
          </div>
        ))}
      </Card>
    </div>
  );
}
const mapStateToProps = (state) => {
  const { User } = state;
  console.log("state", User);
  const tasks = User.completedTasks;
  const Index = User.index;

  return { Index, User, tasks };
};
const mapDispatchtoProps = (dispatch) => {
  return {
    setCompleteData: (data) => dispatch(setCompleted(data)),
  };
};
export default connect(mapStateToProps, mapDispatchtoProps)(Design);

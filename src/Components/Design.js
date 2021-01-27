import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { FaArrowLeft } from "react-icons/fa";

import { Button, Card, CardHeader, CardTitle } from "reactstrap";
import About from "./About";
import AboutTwo from "./AboutTwo";
function Design(props) {
  const { setVisible, setDesignVisible, tasks, Index } = props;
  const [comp, setComp] = useState(null);
  useEffect(() => {
    setComp(tasks[Index]);
    checkProps();
  }, [props]);
  const checkProps = () => {
    const height = "150";
    var alpha = tasks[Index].props;
    if (alpha.title === "About") {
      setComp(
        <About {...alpha} height={height} headHeight="9px" subHeight="5px" />
      );
    } else if (alpha.title === "About2") {
      setComp(
        <AboutTwo {...alpha} height={height} headHeight="9px" subHeight="5px" />
      );
    }
  };
  return (
    <div>
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
        <div style={{ height: "150px", border: "1px solid black" }}>{comp}</div>
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
export default connect(mapStateToProps)(Design);

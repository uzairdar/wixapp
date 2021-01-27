import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setCompleted, setData, setHeading } from "../redux/ActionCreators";
import About2Edit from "./EditComponents/About2Edit";
import AboutEdit from "./EditComponents/AboutEdit";
import "./css/edit.css";
import { Button, Card, CardTitle } from "reactstrap";
function Edit(props) {
  const { Index, title, tasks, setVisible } = props;
  const [arr, setArr] = useState([]);
  // const [check, setCheck] = useState("false");
  const [current, setCurrent] = useState(tasks[Index]);
  const [editComp, setEditComp] = useState(null);
  useEffect(() => {
    console.log("editsss", title, Index);
    setCurrent(tasks[Index]);
    console.log("ello", tasks[Index]);
    collectData();
  }, [props]);
  const collectData = () => {
    if (
      tasks[Index] &&
      tasks[Index].props &&
      tasks[Index].props.title === "About"
    ) {
      console.log("crntsss", current.props);
      setEditComp(<AboutEdit />);
    }
    if (
      tasks[Index] &&
      tasks[Index].props &&
      tasks[Index].props.title === "About2"
    ) {
      setEditComp(<About2Edit />);
    }
  };
  return (
    <div>
      <Card>
        <div className="crossbtn">
          <Button size="sm " color="primary" onClick={() => setVisible(false)}>
            X
          </Button>
        </div>
        <label>
          {" "}
          <CardTitle>
            <u>
              <i>Write here to edit</i>
            </u>{" "}
          </CardTitle>
        </label>
        {editComp}
      </Card>
    </div>
  );
}
const mapStateToProps = (state) => {
  const { User } = state;
  console.log("state", User);

  const tasks = User.completedTasks;
  const Index = User.index;
  const title = User.title;

  return { Index, title, tasks };
};
const mapDispatchtoProps = (dispatch) => {
  return {
    setAboutData: (data) => dispatch(setData(data)),
    setCompleteData: (data) => dispatch(setCompleted(data)),
    setHeadData: (data) => dispatch(setHeading(data)),
  };
};
export default connect(mapStateToProps, mapDispatchtoProps)(Edit);

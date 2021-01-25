import React from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { setCompleted } from "../redux/ActionCreators";
import Header from "./Header";
function AddButton(props) {
  const { index, tasks, setCompleteData, setSelected, selected } = props;

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {selected !== index && (
        <Button
          // className="btns-color"
          style={{
            marginBottom: "-3vh",
            zIndex: "2",
            borderRadius: "50%  50%",
          }}
          color="primary"
          title="Add Section Here"
          onClick={() => setSelected(index)}
        >
          +
        </Button>
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
    setCompleteData: (data) => dispatch(setCompleted(data)),
  };
};
export default connect(mapStateToProps, mapDispatchtoProps)(AddButton);

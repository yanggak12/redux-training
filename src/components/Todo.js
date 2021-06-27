import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../routes/store";

function Todo({ text, onBtnClick }) {
  return (
    <li>
      {text}
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onBtnClick: () =>
      dispatch(actionCreators.deleteTodo(parseInt(ownProps.id))),
  };
};
export default connect(null, mapDispatchToProps)(Todo);

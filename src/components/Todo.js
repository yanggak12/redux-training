import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../routes/store";

function Todo({ text, onBtnClick, id }) {
  return (
    <li>
      <Link to={`/${id}`}>
        {text}
        <button onClick={onBtnClick}>DEL</button>
      </Link>
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

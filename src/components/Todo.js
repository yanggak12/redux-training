import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { remove } from "../routes/store";

function Todo({ text, onBtnClick, id }) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onBtnClick: () => dispatch(remove(parseInt(ownProps.id))),
  };
};
export default connect(null, mapDispatchToProps)(Todo);

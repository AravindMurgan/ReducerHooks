import React from "react";
import BuyCakes from "./index";
import { connect } from "react-redux";

function CakeBucket(props) {
  return (
    <div>
      <h3> Number of Cakes - {props.numofCakes} </h3>
      <button onClick={(e) => props.BuyCakes}></button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numofCakes: state.numofCakes
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    BuyCakes: dispatch(BuyCakes())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeBucket);

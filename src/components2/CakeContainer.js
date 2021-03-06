import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function CakeContainer(props) {
  return (
    <div>
      <h1>CakeContainer</h1>

      <h3>No of Cakes {props.numberofcakes} </h3>
      <button onClick={props.buyCake}>Buy cakes</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numberofcakes: state.numberofcakes
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
